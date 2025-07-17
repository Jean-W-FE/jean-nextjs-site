import { NextResponse } from "next/server";

// 动态路由
export async function GET(request: Request, { params }: { 
    params: { id: string } }) { const { id } = params; 
    return NextResponse.json({ message: `Get user with ID: ${id}` }); 
}
