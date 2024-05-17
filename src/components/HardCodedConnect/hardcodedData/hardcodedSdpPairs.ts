export const hardcodedSdpPairs: {
    pairNumber: number;
    pair: { type: string; sdp: string }[];
}[] = [
    {
        pairNumber: 1,
        pair: [
            {
                type: "offer",
                sdp: "v=0\r\no=- 4830010141289948807 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=candidate:1822589118 1 udp 2113937151 22bfbae6-f322-4dde-b638-44d9f0a429c6.local 49421 typ host generation 0 network-cost 999\r\na=ice-ufrag:gVQl\r\na=ice-pwd:XrEbPbNtyA0f/q8YoLz+HyOh\r\na=ice-options:trickle\r\na=fingerprint:sha-256 B1:61:5D:C9:80:CB:C5:62:D3:FE:88:DF:89:EC:72:BB:F3:5E:C2:38:EF:4E:52:F7:D2:10:1B:C2:60:84:9F:ED\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n",
            },
            {
                type: "answer",
                sdp: "v=0\r\no=- 6670479683017504667 3 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=candidate:1180783806 1 udp 2113937151 acd12ec3-bf07-45e7-b3ed-fc3e75aa3679.local 52119 typ host generation 0 network-cost 999\r\na=ice-ufrag:Lmhs\r\na=ice-pwd:VnrzmSGKCAKyBP/WJSKWgRwf\r\na=ice-options:trickle\r\na=fingerprint:sha-256 A7:6C:2E:1F:4B:60:DF:84:3F:43:4D:B7:6F:02:EF:64:D6:FD:01:10:1B:6A:60:9F:92:1F:76:01:6F:4A:96:4A\r\na=setup:active\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n",
            },
        ],
    },
];