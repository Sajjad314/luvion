export default function Product(props: any) {
  return (
    <div className=" flex flex-col gap-5 mx-10 my-20">
      <img
        className="w-full h-64 object-cover"
        src={props.url}
        alt="product image"
      />
      <h2 className=" text-lg text-black font-semibold text-center">
        {props.name}
      </h2>
      <p className=" text-sm text-black font-normal text-center">
        {props.price}
      </p>
    </div>
  );
}
