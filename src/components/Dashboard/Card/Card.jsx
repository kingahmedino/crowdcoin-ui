import { Card, Grid } from "@mantine/core";
import Image from "next/image";
import Data from "./CardDetails.json";
import Contributions from "/images/Contributions.svg";
import Withdrawal from "/images/Withdrawal.svg";
import Campaign from "/images/Campaign.svg";
import Link from "next/link";

const DashbordCard = () => {
  console.log(Data);

  const images = [Campaign, Contributions, Withdrawal];

  return (
    <Grid>
      {Data.data.map((item) => (
        <Grid.Col key={item.id} style={{}} span={4}>
          <Link href={item.link}>
            <a
              style={{
                textDecoration: "none",
              }}
            >
              <Card
                style={{
                  padding: "0px",
                  paddingTop: "60px",
                  paddingBottom: "60px",
                  paddingLeft: "40px",
                  marginTop: "40px",
                  backgroundColor:
                    item.id === 0
                      ? "#CEE0FF"
                      : item.id === 1
                      ? "#E9CDFF"
                      : "#DEFFE5",
                }}
                radius={24}
              >
                <Image
                  style={{
                    marginTop: "66px",
                  }}
                  src={images[item.id]}
                  width={71}
                  height={71}
                  alt=""
                />
                <h3
                  style={{
                    margin: "0px",
                    marginTop: "12px",
                    width: "100%",
                    maxWidth: "210px",
                    fontSize: "32px",
                    fontWeight: "500",
                    lineHeight: "35px",
                    color:
                      item.id === 0
                        ? "#3770CF"
                        : item.id === 1
                        ? "#9E48E1"
                        : "#2DBA4C",
                  }}
                >
                  {item.content}
                </h3>
              </Card>
            </a>
          </Link>
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default DashbordCard;
