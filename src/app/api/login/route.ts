import { NextResponse } from "next/server"; 
import jwt from "jsonwebtoken"; 
export async function POST(request: Request) { 
    try { 
        const { username, password } = await request.json();  // 模拟验证逻辑 
   
        if (username === "admin" && password === "password") { 
            const token = jwt.sign({ username }, process.env.JWT_SECRET || "secret", { expiresIn: "1h", }); 
            
            return NextResponse.json({ token }, { status: 200 }); } 
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 }); 
    } catch (error) { 
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    } 
}
