yarn start miners:start --pool 18.162.116.194 --address e1e00db1c52f884eb2e52dd9ff84753f256445cc17f17010d739b6421941c74fe747a2f6628aa8ee2cefa4
yarn run v1.22.19
$ yarn build && yarn start:js miners:start --pool 18.162.116.194 --address e1e00db1c52f884eb2e52dd9ff84753f256445cc17f17010d739b6421941c74fe747a2f6628aa8ee2cefa4
$ tsc -b
$ cross-env OCLIF_TS_NODE=0 IRONFISH_DEBUG=1 node --expose-gc bin/run miners:start --pool 18.162.116.194 --address e1e00db1c52f884eb2e52dd9ff84753f256445cc17f17010d739b6421941c74fe747a2f6628aa8ee2cefa4
Starting to mine with public address: e1e00db1c52f884eb2e52dd9ff84753f256445cc17f17010d739b6421941c74fe747a2f6628aa8ee2cefa4 at pool 18.162.116.194:9034
Connecting to pool...123
Successfully connected to pool
mining.subscribe {
  version: 1,
  name: undefined,
  publicAddress: 'e1e00db1c52f884eb2e52dd9ff84753f256445cc17f17010d739b6421941c74fe747a2f6628aa8ee2cefa4'
}
Subscribing to pool to receive work
Server sent mining.subscribed message
mining.subscribed
{ clientId: 2, graffiti: 'hentai8.2' }
Server has identified us as client 2
Server sent mining.set_target message
mining.set_target
{
  target: '00000b2f4fc0794908cf232ff78625902416a7530755a66c5788c4a6d5331471'
}
Server sent mining.notify message
mining.notify
{
  miningRequestId: 5,
  header: '0000000000000000cf0e020000000000000000000002aaced825176dd9db0701c995760a03a1f42c69b63b4b7d4090b0ff7f32477b07a0cc3c89d6f6335433def2d95ff91be838ae47212ba43794901bb0ce220200000000f6ee7f75663920ae6d8617379629d5130323e6e20c5e19cb5606c71bb97ed7e668d5130100000000000000000007b87e00ba71e3b4a9a27d79dad30a55297da63550092644b289502c8efe8f82010000000000007736f4a168656e7461693800000000000000000000000000000000000000000000000000'                                                                                                                                           
}
new work 00000b2f4fc0794908cf232ff78625902416a7530755a66c5788c4a6d5331471 5 0 H/s
Found share: 00000000002f3430 5 0 H/s
mining.submit { miningRequestId: 5, randomness: '00000000002f3430' }
Found share: 000000000023f3b7 5 0 H/s
mining.submit { miningRequestId: 5, randomness: '000000000023f3b7' }
Found share: 000000000043e7c8 5 0 H/s
mining.submit { miningRequestId: 5, randomness: '000000000043e7c8' }
Found share: 00000000002e9f97 5 0 H/s
mining.submit { miningRequestId: 5, randomness: '00000000002e9f97' }
Server sent mining.notify message
mining.notify
{
  miningRequestId: 6,
  header: '0000000000000000cf0e020000000000000000000002aaced825176dd9db0701c995760a03a1f42c69b63b4b7d4090b0ff7f32477b07a0cc3c89d6f6335433def2d95ff91be838ae47212ba43794901bb0ce220200000000f6ee7f75663920ae6d8617379629d5130323e6e20c5e19cb5606c71bb97ed7e668d5130100000000000000000007b9756d433c4eb405dae482fbfa06c5e3655b6de0257e93a4a4843cb5fe8f82010000000000007736f4a168656e7461693800000000000000000000000000000000000000000000000000'                                                                                                                                           
}
new work 00000b2f4fc0794908cf232ff78625902416a7530755a66c5788c4a6d5331471 6 4.71 MH/s
Found share: 0000000000050012 6 4.71 MH/s
mining.submit { miningRequestId: 6, randomness: '0000000000050012' }
Found share: 0000000000381d52 6 2.91 MH/s
mining.submit { miningRequestId: 6, randomness: '0000000000381d52' }
Found share: 00000000004fbb37 6 2.91 MH/s
mining.submit { miningRequestId: 6, randomness: '00000000004fbb37' }
Found share: 00000000004f2836 6 2.91 MH/s
mining.submit { miningRequestId: 6, randomness: '00000000004f2836' }
Found share: 00000000005c0452 6 2.58 MH/s
mining.submit { miningRequestId: 6, randomness: '00000000005c0452' }
Found share: 00000000006a69e5 6 2.58 MH/s
mining.submit { miningRequestId: 6, randomness: '00000000006a69e5' }
Found share: 0000000000708e51 6 2.58 MH/s
mining.submit { miningRequestId: 6, randomness: '0000000000708e51' }
Found share: 0000000000862721 6 2.58 MH/s
mining.submit { miningRequestId: 6, randomness: '0000000000862721' }
Found share: 000000000078580e 6 2.64 MH/s
mining.submit { miningRequestId: 6, randomness: '000000000078580e' }
Found share: 00000000008e9990 6 2.64 MH/s
mining.submit { miningRequestId: 6, randomness: '00000000008e9990' }
Found share: 00000000009884dd 6 2.64 MH/s
mining.submit { miningRequestId: 6, randomness: '00000000009884dd' }
Found share: 00000000009ebb75 6 2.64 MH/s
mining.submit { miningRequestId: 6, randomness: '00000000009ebb75' }
Found share: 0000000000bf28a8 6 2.59 MH/s
mining.submit { miningRequestId: 6, randomness: '0000000000bf28a8' }
Found share: 00000000012a6482 6 2.61 MH/s
mining.submit { miningRequestId: 6, randomness: '00000000012a6482' }
Found share: 00000000014ce6c8 6 2.61 MH/s
mining.submit { miningRequestId: 6, randomness: '00000000014ce6c8' }
Found share: 000000000143d0bb 6 2.61 MH/s
mining.submit { miningRequestId: 6, randomness: '000000000143d0bb' }
Found share: 00000000016852b7 6 2.49 MH/s
mining.submit { miningRequestId: 6, randomness: '00000000016852b7' }
Found share: 00000000014a6721 6 2.33 MH/s
mining.submit { miningRequestId: 6, randomness: '00000000014a6721' }
Server sent mining.notify message
mining.notify
{
  miningRequestId: 7,
  header: '0000000000000000cf0e020000000000000000000002aaced825176dd9db0701c995760a03a1f42c69b63b4b7d4090b0ff7f32477b07a0cc3c89d6f6335433def2d95ff91be838ae47212ba43794901bb0ce220200000000f6ee7f75663920ae6d8617379629d5130323e6e20c5e19cb5606c71bb97ed7e668d5130100000000000000000007ba6d17c625fbe36ab8895cf8b20009fa720c3756964c2189711f4cdcfe8f82010000000000007736f4a168656e7461693800000000000000000000000000000000000000000000000000'                                                                                                                                           
}
new work 00000b2f4fc0794908cf232ff78625902416a7530755a66c5788c4a6d5331471 7 2.33 MH/s
Found share: 00000000001fd9ea 7 2.28 MH/s
mining.submit { miningRequestId: 7, randomness: '00000000001fd9ea' }