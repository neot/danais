danais
======
As of march 2014, this progam has not been entirely tested while we are still coding the client.

DNS gateway between TLS encapsulated DNS requests and clear trafic DNS server

To visit web pages in a secured way, you use HTTPS, but what about DNS requests that show clearly what sites you visit?
So we need crypted DNS communications between the client and the DNS server.

This server program provides a gateway between the client program who sends TLS encapsulated DNS requests and a DNS server who only understand clear DNS requests.

How to use Danais in a client programm?

first you need to build your DNS query.
Then open a TLS communication whith the Danais server on port TCP 53 and wait for the reply.
Once you get the answer, you can parse it.

For instance, Danais listen on and route only to port 53. But you can use it for any UDP protocol which need secured communication without coding a full functionnalities server dedicated to a particular protocol.

TODO :
	- test the server when the client is finished
	- make it more generic whith listening on and routing to a given port

Writen in NodeJS vanilla.
