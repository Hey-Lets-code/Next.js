# 📘 Next.js

Este README documenta os principais conceitos e práticas que aprendi ao explorar o Next.js, um framework construído sobre React.

## 📌 Índice

- [Introdução](#introdução)
- [Instalação e Configuração](#instalação-e-configuração)
- [Roteamento](#roteamento)
- [Arquivos `page.tsx`](#arquivos-pagetsx)
- [Layout](#layout)
- [Otimização de Imagens](#otimização-de-imagens)
- [Deploy com Vercel](#deploy-com-vercel)
- [Conclusão](#conclusão)

## Introdução

O **Next.js** é uma extensão do React que facilita o desenvolvimento de aplicações web que combinam a interatividade de sites dinâmicos com a performance de sites estáticos.

## Instalação e Configuração

Para iniciar um projeto Next.js, você pode utilizar o comando abaixo, que cria a estrutura básica do aplicativo:

```bash
npx create-next-app@latest
```

Após a instalação, você terá uma estrutura de pastas organizada, com foco principal na pasta `src`, onde os componentes e páginas principais serão desenvolvidos.

## Roteamento

O roteamento em Next.js é baseado na estrutura de arquivos. Cada arquivo `page.tsx` dentro da pasta `src` se transforma em uma rota acessível na aplicação. Por exemplo:

- Um arquivo `src/performance/page.tsx` resulta na rota `localhost:3000/performance`.
- Um arquivo `src/reliability/page.tsx` resulta na rota `localhost:3000/reliability`.

Este sistema de roteamento torna a criação e a manutenção de URLs mais intuitiva e direta.

## Arquivos `page.tsx`

Os arquivos `page.tsx` dentro da pasta `src` são essenciais para definir as rotas da aplicação. Cada arquivo exporta um componente React, que será renderizado na respectiva rota. Um exemplo básico de um arquivo `page.tsx`:

```typescript
export default function PerformancePage() {
    return (
        <div>
            <h1>Performance Metrics</h1>
            <p>Detalhes sobre a performance da aplicação.</p>
        </div>
    );
}
```

## Layout

Em Next.js, o arquivo de layout permite centralizar a renderização das páginas da aplicação. Ele é ideal para inserir elementos comuns, como cabeçalhos, rodapés e barras de navegação, que devem aparecer em todas as páginas.

Exemplo básico de um layout:

```typescript
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/performance">Performance</Link>
                <Link href="/reliability">Reliability</Link>
            </nav>
            <main>{children}</main>
        </div>
    );
}
```

Aqui, o `children` representa o conteúdo específico de cada página que será renderizado dentro do layout.

## Otimização de Imagens

Uma das funcionalidades mais interessantes do Next.js é o componente `Image`, que otimiza automaticamente o carregamento das imagens. Dependendo do dispositivo usado, o componente ajusta as dimensões da imagem, garantindo que ela seja carregada de maneira eficiente.

### Importando e usando o componente Image:

```typescript
import Image from 'next/image';

export default function ExamplePage() {
    return (
        <div>
            <h1>Exemplo de Imagem Otimizada</h1>
            <Image src="/local-image.jpg" alt="Descrição da imagem" width={800} height={600} />
        </div>
    );
}
```

### Opções de dimensionamento:

- **Imagens Locais**: As dimensões são obtidas automaticamente da imagem importada.
- **Imagens Externas**: É necessário definir `width` e `height` ou usar a propriedade `fill`, que faz a imagem se expandir para preencher o elemento pai.

## Deploy com Vercel

O Next.js possui integração nativa com o Vercel, tornando o processo de deployment extremamente simples. Com um único comando, você pode publicar sua aplicação:

```bash
npx vercel
```

![image](https://github.com/user-attachments/assets/e2596ea4-bd1e-4331-991a-d9f0b42e82cb)


O Vercel gerencia automaticamente o build e o deploy da aplicação, facilitando o envio de novas versões para produção.


---

Esse README serve como uma documentação clara e detalhada dos meus conhecimentos adquiridos, oferecendo um guia prático para quem quiser entender os conceitos fundamentais do Next.js.
