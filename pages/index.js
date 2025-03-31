
import plants from "@/assets/plants";
import Image from "next/image";


export default function HomePage() {
  

  return (
    <div>
      <h1>{"iPlan{t}"}</h1>
      <ul> {plants.map((plant) => 
    <li key={plant.id} >{plant.name} <Image alt ="plant image"src={plant.imageUrl} height="200" width="300"/></li>  
    )

}

      </ul>
      

    </div>
  );
}
