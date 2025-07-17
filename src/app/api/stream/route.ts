/**
 * @description 流式响应, 用于处理大文件 or 实时数据
 * @example 
 * ```tsx
 * const response = await fetch('/api/stream'); // 获取流式响应     
 * const reader = response.body?.getReader(); // 获取流式响应的读取器
 * while (true) {
 *   const { done, value } = await reader?.read(); // 读取流式响应
 *   if (done) break; // 如果流式响应结束，则退出循环
 *   console.log(new TextDecoder().decode(value)); // 将流式响应转换为文本并打印  
 *   // 处理流式响应的数据
 *   // 例如：将数据写入到文件、数据库、WebSocket 等
 *   // 或者将数据发送到前端进行实时展示
 * }
 * ```
 */ 
export async function GET() { 
    const stream = new ReadableStream({ 
        async start(controller) { 
            controller.enqueue(
                new TextEncoder().encode("Streaming started...\n")
            ); 
            await new Promise((resolve) => setTimeout(resolve, 1000)); 
            
            controller.enqueue(
                new TextEncoder().encode("More data...\n")
            ); 

            controller.close(); }, 
        }); 
        return new Response(stream, { 
            headers: { "Content-Type": "text/plain" }, 
            status: 200, 
        });
}
