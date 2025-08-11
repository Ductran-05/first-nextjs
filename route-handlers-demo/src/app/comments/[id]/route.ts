import { comments } from "../data";
export async function GET(_request: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    const comment = comments.find((comment) => comment.id === parseInt(id));
    return new Response(JSON.stringify(comment));
}

export async function PATCH(_request: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    const body = await _request.json();
    const { text } = body;
    const index = comments.findIndex((comment) => comment.id === parseInt(id));
    comments[index].text = text;
    return new Response(JSON.stringify(comments[index]));
}

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    const index = comments.findIndex((comment) => comment.id === parseInt(id));
    comments.splice(index, 1);
    return new Response(JSON.stringify(comments));
}