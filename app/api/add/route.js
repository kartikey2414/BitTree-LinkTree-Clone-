import clientPromise from "@/lib/mongodb";
export async function POST(request) {
    const body=await request.json();
    const client=await clientPromise;
    const db =client.db("bittree");
    const collection=db.collection("links")
    const doc= await collection.findOne({handle:body.handle})
    if(doc){
      return Response.json({ message: 'This Bittree already exists!',error:true,success:false,result:null })
    }
    const result=await collection.insertOne(body);
  return Response.json({ message: 'Your Bittree has been generated!',error:false,success:true,result:result })
}