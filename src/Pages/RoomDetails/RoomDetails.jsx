import React from "react";
import Container from "../../components/Shared/Container";
import Header from "../../components/Rooms/Header";
import RoomInfo from "../../components/Rooms/RoomInfo";
import RoomReservation from "../../components/Rooms/RoomReservation";

const RoomDetails = () => {
  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <div>
            <Header />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 mt-6">
            <div>
              <RoomInfo />
            </div>
            <div className="order-first md:order-last">
              <RoomReservation />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RoomDetails;
