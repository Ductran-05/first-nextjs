import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";
export async function GET(request: NextRequest) {
    const headersList = await headers();
    console.log(headersList.get("Authorization"));

    const theme = request.cookies.get("theme")
    console.log(theme);
    const cookiesStore = await cookies();
    cookiesStore.set("resultsPerPage", "10")
    return new Response("Profile ",
        {
            headers: {
                "Content-Type": "application/json",
                "set-cookie": "theme=dark",
            },
        }
    )
}
