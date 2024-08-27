'use server';

import { redirect } from 'next/navigation';
import { db } from '@/db';
import { revalidatePath } from 'next/cache';

export async function editSnippet(id: number, code: string) {
    await db.snippet.update({
        where: { id },
        data: { code }
    });

    revalidatePath(`/snippets/${id}`);
    redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
    await db.snippet.delete({
        where: { id },
    });
    revalidatePath('/')
    redirect('/')
}

export async function createSnippet(formState: {message:string}, formData: FormData) {
    // Precisa ser um server action - essa sintaxe do 'use server'; servirá para tratar a função abaixo como um action server
    //"use server";
    try {

    // Validar o input do usuário e torná-lo válido
    const title = formData.get("title");
    const code = formData.get("code");

    if (typeof title !== 'string' || title.length < 3) {
        return {
            message: 'Title must be longer',
        };
    }

    if (typeof code !== 'string' || code.length < 10) {
        return {
            message: 'Code must be longer',
        };
    }
    // Criar um novo arquivo(?) - record in the database
    await db.snippet.create({
      data: {
        title: title,
        code: code,
      },
    });
    } catch (err: unknown) {
     if (err instanceof Error) {
        return {
            message: err.message
        };
    } else {
        return {
            message: 'Something went wrong...'
        }
     }
}

    // Redirecionar o usuário de volta para a rota /
    revalidatePath('/');
    redirect("/");
  }