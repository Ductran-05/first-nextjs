import { comments } from "../data";
export async function GET(_request: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    const comment = comments.find((comment) => comment.id === parseInt(id));
    return new Response(JSON.stringify(comment));
}