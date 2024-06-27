import java.io.IOException;
import java.net.InetSocketAddress;
import java.nio.ByteBuffer;
import java.nio.channels.SelectionKey;
import java.nio.channels.Selector;
import java.nio.channels.ServerSocketChannel;
import java.nio.channels.SocketChannel;
import java.util.Iterator;

public class NIOExampleServer {

    public static void main(String[] args) throws IOException {
        // 创建ServerSocketChannel
        ServerSocketChannel serverSocketChannel = ServerSocketChannel.open();
        serverSocketChannel.configureBlocking(false); // 设置为非阻塞模式

        // 绑定端口
        serverSocketChannel.bind(new InetSocketAddress(8080));

        // 创建Selector并注册ServerSocketChannel到Selector上，监听ACCEPT事件
        Selector selector = Selector.open();
        serverSocketChannel.register(selector, SelectionKey.OP_ACCEPT);

        System.out.println("服务器已启动，等待连接...");

        while (true) {
            // 选择一组键，其相应的通道已为 I/O 操作准备就绪。
            selector.select();

            // 获取此选择器的已选择键集
            Iterator<SelectionKey> iterator = selector.selectedKeys().iterator();
            System.out.println("准备就绪的键数量: " + selector.selectedKeys().size());
            while (iterator.hasNext()) {

                SelectionKey key = iterator.next();
                System.out.println("准备就绪的键: " + key);

                iterator.remove(); // 防止重复处理

                if (key.isAcceptable()) {
                    System.out.println("接收连接就绪");
                    // 若接收连接就绪
                    ServerSocketChannel server = (ServerSocketChannel) key.channel();
                    SocketChannel client = server.accept(); // 接受连接
                    client.configureBlocking(false); // 设置为非阻塞模式
                    client.register(selector, SelectionKey.OP_READ); // 注册到selector，监听READ事件
                    System.out.println("新客户端连接: " + client);
                } else if (key.isReadable()) {
                    // 若读就绪
                    readData(key);

                }
            }
        }
    }

    private static void readData(SelectionKey key) throws IOException {
        SocketChannel client = (SocketChannel) key.channel();

        ByteBuffer buffer = ByteBuffer.allocate(1024);

        int readBytes = client.read(buffer);

        if (readBytes > 0) {

            buffer.flip();
            String data = new String(buffer.array(), 0, readBytes);
            System.out.println("接收到消息: " + data);
            ByteBuffer outBuffer = ByteBuffer.wrap(data.getBytes());

            switch (data) {
                // 简单写一个固定的对话
                case "你好":
                    outBuffer = ByteBuffer.wrap("你好".getBytes());
                    break;
                case "你好吗":
                    outBuffer = ByteBuffer.wrap("我很好".getBytes());
                    break;
                case "你叫什么名字":
                    outBuffer = ByteBuffer.wrap("我叫小明".getBytes());
                    break;
                case "你今年几岁":
                    outBuffer = ByteBuffer.wrap("我今年18岁".getBytes());
                    break;
                case "你喜欢什么":
                    outBuffer = ByteBuffer.wrap("我喜欢吃鸡腿".getBytes());
                    break;
                case "你喜欢吃什么":
                    outBuffer = ByteBuffer.wrap("我喜欢吃鸡腿".getBytes());
                    break;
                default:
                    outBuffer = ByteBuffer.wrap("未知消息".getBytes());
            }
            System.out.println("发送消息给客户端: " + outBuffer);

            client.write(outBuffer); // 将接收到的消息回传给客户端
            buffer.clear();

        } else {

            client.close();
        }
    }
}
