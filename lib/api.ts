const API_URL = process.env.NEXT_PUBLIC_API_URL;

 


export async function apiFetch<T>(
    endpoint: string
): Promise<T> {


    const res = await fetch(
        `${API_URL}${endpoint}`,
        {
            next: {
                revalidate: 60
            }
        }
    );


    if (!res.ok) {
        throw new Error("API failed");
    }


    return res.json();

}