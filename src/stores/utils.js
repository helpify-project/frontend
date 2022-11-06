export const jsonrpc = async (method, params) => {
    const req = await fetch(import.meta.env.VITE_API_URL + "/chat/rpc", {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
            jsonrpc: "2.0",
            id: "dontcare",
            method,
            params,
        })
    });

    if (!req.ok) {
        throw new Error("vittu");
    }

    const body = await req.json();
    if (body.error) {
        throw new Error("vittu");
    }

    return body.result;
};