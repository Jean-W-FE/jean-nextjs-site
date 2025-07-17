import { NextResponse } from "next/server";

// 表单提交
export async function POST(request: Request) { 
    try { const data = await request.json(); 
        return NextResponse.json({ 
            message: "Data received", data 
        }, { 
            status: 200 
        }); 
    } catch (error) { 
        return NextResponse.json({ error: "Invalid JSON" }, { status: 400 }); 
    } 
}


/**
 * @description 表单提交
 * @example
 * ```shell
 * curl -X POST -H "Content-Type: application/json" -d '{"name":"Alice"}' http://localhost:3000/api/submit
 * @returns
 * ```json
 * {
 *   "message": "Data received",
 *   "data": {
 *     "name": "Alice"
 *   }
 * }
 * ```
 */ 
