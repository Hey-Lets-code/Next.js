import { redirect } from "next/navigation";
import { db } from "@/db";

export default function SnippetCreatePage() {
  async function createSnippet(formData: FormData) {
    // Precisa ser um server action - essa sintaxe do 'use server'; servirá para tratar a função abaixo como um action server
    "use server";

    // Validar o input do usuário e torná-lo válido
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    // Criar um novo arquivo(?) - record in the database
    const snippet = await db.snippet.create({
      data: {
        title: title,
        code: code,
      },
    });

    // Redirecionar o usuário de volta para a rota /
    redirect("/");
  }

  return (
    <form action={createSnippet}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            className="border rounded p-2 w-full"
            id="title"
          />
        </div>
        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            name="code"
            className="border rounded p-2 w-full"
            id="code"
          />
        </div>
        <button type="submit" className="border rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
}
