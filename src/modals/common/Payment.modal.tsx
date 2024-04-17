import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/components/ui/dialog";

const PaymentModal = () => {
  return (
    <Dialog>
      <DialogTrigger className="border border-white text-white text-lg font-semibold px-4 py-2 rounded hover:bg-white hover:text-black hover:border-0">
        Book an Appointment
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className=" flex flex-row items-center justify-center">
            <p className="text-xl font-bold font-SN text-center  border-black border-b-2 pb-2 ">
              Complete your Booking here
            </p>
          </DialogTitle>
          <DialogDescription className=" h-full w-auto">
            <iframe
              width="100%"
              frameBorder="0"
              height="100%"
              src="https://bestill.timma.no/reservation/luvionbarbershop"
              id="reservationIframe85203"
              title="Booking Service"
              className=" w-full h-full"
            ></iframe>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
