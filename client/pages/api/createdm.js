import { client } from '../../lib/client'

const query = `*[_type == "conversations" && isDm==false]{
    roomId,
    roomName,
    "avatar": image.asset->url
}`

export default async (req, res) => {
  const { userAddress } = req.body

//   const conversationDoc = {
//     _type: 'conversations',
//     _id: `${userAddress}-dm`,
//     isDm: true,
//     roomId: userAddress,
//     userReference: {
//       _key: userAddress,
//       _ref: `${userAddress}-user`,
//       _type: 'reference',
//     },
//   }

  try {
      const sanityResponse = await client.fetch(query)
      res.status(200).send(sanityResponse)
  }catch(e){
      console.error(e)
      res.status(500).send(e)
  }
//   try {
//     await client.createIfNotExists(conversationDoc)

//     res.status(200).send('Successful')
//   } catch (error) {
//     console.error(error)
//     res.status(500).send(error)
//   }
}
