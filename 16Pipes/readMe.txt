Streams in nodejs is very important, it's like we don't have
to gather all data in memory first later consume it, instead 
we can do bit by bit.

Whenever working with requests in nodejs buffers are useful.

Sending data back to the client we can consume it.

So finally it increases performance of our application.

Writable stream - allow nodejs to write data to stream.
Readable stream - allow nodejs to read data from stream.
Duplex - can read and write to a stream.

Writing data to stream, received by the client or browser.
After file is received we are using readable stream.
