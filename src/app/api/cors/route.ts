export async function GET(request: Request) { 
    return new Response(
        JSON.stringify({ message: "CORS enabled" }), { 
            status: 200, 
            headers: { 
                "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Authorization", 
            }, 
        }); 
} 

// 处理 OPTIONS 请求（CORS 预检请求）
export async function OPTIONS() { 
    return new Response(null, { 
        status: 204, 
        headers: { 
            "Access-Control-Allow-Origin": "*", 
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS", 
            "Access-Control-Allow-Headers": "Content-Type, Authorization", 
        }, 
    }); 
}
