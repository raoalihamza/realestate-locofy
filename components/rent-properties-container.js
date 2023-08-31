import { Button } from "@mui/material";
import LatestPropertyRentCard from "./latest-property-rent-card";

const RentPropertiesContainer = () => {
  return (
    <form className="self-stretch flex flex-col py-[86px] px-0 items-center justify-start gap-[39px]">
      <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px] md:pl-[60px] md:pr-[60px] md:box-border">
        <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
          <div className="self-stretch relative text-21xl leading-[48px] font-semibold font-body-large-400 text-primary-800 text-center">
            Latest Properties of Rent
          </div>
          <div className="self-stretch relative text-xl leading-[28px] font-body-large-400 text-lightslategray text-center">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap py-0 px-2.5 items-center justify-center gap-[32px]">
          <LatestPropertyRentCard
            propertyImage="/unsplashrlwe8f8anoc@2x.png"
            car="/car.svg"
            bathtub="/bathtub.svg"
            arrowsOut="/arrowsout.svg"
            plus="/plus.svg"
          />
          <LatestPropertyRentCard
            propertyImage="/unsplashrlwe8f8anoc1@2x.png"
            car="/car.svg"
            bathtub="/bathtub.svg"
            arrowsOut="/arrowsout.svg"
            plus="/plus1.svg"
          />
          <LatestPropertyRentCard
            propertyImage="/unsplashrlwe8f8anoc2@2x.png"
            car="/car1.svg"
            bathtub="/bathtub1.svg"
            arrowsOut="/arrowsout1.svg"
            plus="/plus2.svg"
          />
          <LatestPropertyRentCard
            propertyImage="/unsplashrlwe8f8anoc3@2x.png"
            car="/car1.svg"
            bathtub="/bathtub1.svg"
            arrowsOut="/arrowsout1.svg"
            plus="/plus2.svg"
          />
        </div>
      </div>
      <Button variant="contained" color="primary">
        Load more listing
      </Button>
    </form>
  );
};

export default RentPropertiesContainer;
