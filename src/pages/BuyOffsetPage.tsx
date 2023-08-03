import { formatDate } from "@/hooks/format";
import { buyOffsetsMockup } from "@/mocks/buy-offsets.test";
import { useState } from "react";
import { useParams } from "react-router-dom";

const BuyOffSetPage = () => {
  const [offerValue, setOfferValue] = useState<number>(10);
  const { id } = useParams<{ id: string }>();

  const buyOffset = buyOffsetsMockup.find((data) => data._id === id);

  const handleIncrease = () => {
    setOfferValue(offerValue + 1);
  };

  const handleDecrease = () => {
    if (offerValue === 0) return;
    setOfferValue(offerValue - 1);
  };

  const handleBuy = () => {
    alert("Buy Success");
  };

  return (
    <div className="container lg:max-w-screen-lg mx-auto p-4 font-BAI">
      <div className="h-60 md:h-72 relative rounded-2xl bg-red-100">
        <div className="block h-full relative">
          <img
            src={buyOffset?.image}
            alt=""
            className="h-full absolute object-cover rounded-2xl object-center w-full"
          />
        </div>
      </div>
      <div className="space-y-4 mt-6 px-2 md:px-6 lg:px-8">
        <h1 className="text-4xl">{buyOffset?.project_name}</h1>
        <p className="text-lg font-medium">By {buyOffset?.owner}</p>
        <div>
          <p>
            Date :{" "}
            <span>
              {formatDate(buyOffset?.time_period.start as string)} -{" "}
              {formatDate(buyOffset?.time_period.end as string)}
            </span>
          </p>
        </div>
        <p>
          Price Per Unit : <span>${buyOffset?.price_by_unit}</span>
        </p>
        <div>
          <p className="text-lg font-medium mb-2">Contact</p>
          <p>
            Name : <span>{buyOffset?.contact.name}</span>
          </p>
          <p>
            Email : <span>{buyOffset?.contact.email}</span>
          </p>
          <p>
            Tel : <span>{buyOffset?.contact.tel}</span>
          </p>
        </div>
        <div>
          <p className="font-medium text-lg">Description</p>
          <p className="mt-2">
            {buyOffset?.description} Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatibus amet laudantium voluptas fugit veniam
            perspiciatis minima, ullam aut vel eaque, cumque nihil sunt ut,
            aspernatur ex consectetur alias ipsa quidem? Mollitia est, adipisci
            accusantium modi nulla consectetur quia fugiat architecto
            consequuntur? Dolorem eveniet minima sunt, rem ea nam mollitia optio
            quos praesentium corporis at vitae, inventore modi nobis, eos
            aliquid! Non qui quisquam corporis explicabo unde debitis et
            reiciendis vitae quas nobis, commodi alias iste dolor voluptate
            voluptatem! In minus dolor tempore non a animi odio ad ratione omnis
            reprehenderit! Error quis, minus dignissimos laudantium
            necessitatibus blanditiis vero commodi voluptatem aliquam adipisci
            deleniti maiores quia alias consectetur ipsa eius. Repudiandae
            eveniet, voluptates assumenda porro obcaecati deleniti aperiam
            fugiat illum quo! Totam voluptatibus autem laborum nisi rerum alias
            expedita voluptates molestias ullam saepe, quaerat, at aliquam, ut
            asperiores vero blanditiis nemo ab! Cum maxime perspiciatis eligendi
            animi vitae. Quae, velit temporibus! Nobis maiores quod impedit
            labore qui similique quis pariatur tempore repellendus a ullam
            fugiat, consectetur repellat autem blanditiis voluptates hic? Amet,
            ad sint cumque eos ratione blanditiis reiciendis tempora hic.
            Reiciendis deleniti impedit expedita blanditiis rerum possimus
            earum, alias tempore voluptatem? Amet aperiam qui error architecto
            omnis sunt autem, quo ab, molestiae expedita saepe delectus
            voluptate? Non, recusandae! Quibusdam, consequuntur! Iure vel
            dignissimos omnis, veritatis dolores similique dolorem beatae magnam
            a possimus exercitationem laboriosam ullam aut odit rem vero
            corrupti voluptatem eum? Neque optio officia sed doloribus deserunt
            tenetur odit? Enim commodi magnam eaque esse perferendis facilis
            excepturi distinctio non aliquam. Maiores consequuntur voluptas,
            aperiam debitis voluptatem, explicabo ut molestiae delectus neque
            perferendis laboriosam aliquam numquam minima quae quaerat quas.
            Dolorem magni animi consequuntur ex culpa, praesentium et ad placeat
            ea ducimus? Totam laudantium veritatis quos voluptates dolorum, hic
            nihil consectetur, quas facere, fuga voluptatem quisquam natus.
            Enim, vitae deserunt.
          </p>
        </div>
      </div>
      <div className="text-center mt-8 space-y-4">
        <div className="flex gap-8 justify-center items-center">
          <button
            onClick={handleDecrease}
            className=" p-1 rounded-full bg-white shadow-md"
          >
            <img src="/minus_icon.svg" alt="" className="w-4" />
          </button>
          <p className="text-3xl font-medium">{offerValue}</p>
          <button
            onClick={handleIncrease}
            className=" p-1 rounded-full bg-white shadow-md"
          >
            <img src="/plus_icon.svg" alt="" className="w-4" />
          </button>
        </div>
        <button
          onClick={handleBuy}
          className="bg-primary-color text-white font-medium px-16 rounded-lg py-2 hover:bg-opacity-90"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default BuyOffSetPage;
