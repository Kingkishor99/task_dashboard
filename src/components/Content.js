import React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Select from "@mui/material/Select";
import LoginIcon from "@mui/icons-material/Login";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

function Content() {
  const [data, setData] = React.useState([]);

  const card3 = () => {
    return (
      <div
        style={{
          marginTop: 20,
        }}
      >
        <Card style={styles.card1}>
          <div>
            <div style={{ color: "white", marginBottom: 20, fontSize: 20 }}>
              12.5% of fee
            </div>
            <div style={{ color: "#808191", fontSize: 18, marginBottom: 10 }}>
              Your Referral Link for xyz
            </div>
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                marginBottom: 20,
              }}
            >
              <div style={styles.button4}>
                https://unityexchange.design{" "}
                <ContentCopyOutlinedIcon style={{ marginLeft: 35 }} />
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  };

  React.useEffect(() => {
    fetch("https://raw.githubusercontent.com/akshita151199/APIs/main/data")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  function account_(string) {
    return `${string.substr(0, 5)}..${string.substr(string.length - 7, 7)}`;
  }

  console.log(">>>>>>>>>>>>>>", data);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ width: "100%", paddingRight: 35 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              borderBottomWidth: 3,
              borderColor: "#3772FF",

              borderBottomStyle: "solid",
              color: "#fff",
              fontSize: 22,
              fontWeight: "bold",

              fontFamily: "Poppins",
            }}
          >
            Section
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              color: "white",
              alignContent: "center",
              backgroundColor: "#191B20",
              padding: 10,
              borderRadius: 10,
              justifyContent: "space-evenly",
            }}
          >
            <AccountBalanceWalletOutlinedIcon
              style={{ color: "#3772FF", marginRight: 10 }}
            />
            <div style={{ marginRight: 10 }}>0.2 $XYZ</div>

            <Card
              style={{
                backgroundColor: "#A3E3FF",
                color: "#3772FF",
                alignContent: "center",
                width: 70,
                paddingInline: 5,
                display: "flex",
                justifyContent: "center",
              }}
            >
              Tier 1
            </Card>
          </div>
        </div>
        {/* =====================================card1========================================================== */}

        <div
          style={{
            marginTop: 20,
            position: "relative",
          }}
        >
          <img
            src={require("../assets/icons/logo2.png")}
            style={{
              height: 220,
              width: 220,
              position: "absolute",
              bottom: -60,
              right: 50,
            }}
          />
          <Card
            style={{
              backgroundColor: "#A3E3FF",
              alignContent: "center",
              fontFamily: "Poppins",
              fontSize: 18,
              padding: 30,
              fontWeight: "bold",
              borderRadius: 10,
            }}
          >
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <div
              style={{
                backgroundColor: "white",
                color: "black",
                fontFamily: "Poppins",
                padding: 2,
                width: 80,
                textAlign: "center",
                borderRadius: 5,
                marginTop: 10,
              }}
            >
              Tutorial
            </div>
          </Card>
        </div>
        {/* ===========================================card2==================================================== */}
        <div
          style={{
            marginTop: 20,
          }}
        >
          <Card
            style={{
              backgroundColor: "#191B20",
              alignContent: "center",
              fontFamily: "Poppins",
              fontSize: 14,
              padding: 15,
              fontWeight: "bold",
              display: "flex",
              flexDirection: "row",
              paddingInline: 10,
              justifyContent: "space-between",
              borderRadius: 15,
            }}
          >
            <div>
              <div style={{ color: "white", marginBottom: 10 }}>
                Your rewards
              </div>
              <div style={{ color: "white", fontSize: 25, marginBottom: 10 }}>
                $ 0.26231428
              </div>
              <div style={{ flexDirection: "row", display: "flex" }}>
                <div style={styles.button}>Tutorial</div>
                <div style={styles.button}>$10 BNB</div>
                <div style={styles.button}>$210 BTC</div>
              </div>
            </div>

            <div style={{ alignSelf: "center" }}>
              <div
                style={{
                  color: "white",
                  alignContent: "center",
                  display: "flex",
                  flexDirection: "row",
                  backgroundColor: "#3772FF",
                  padding: 8,
                  borderRadius: 6,
                  marginRight: 30,
                }}
              >
                <OpenInNewIcon style={{ fontSize: 20 }} />
                <div style={{ marginInline: 5 }}>Custom link</div>
              </div>
            </div>
          </Card>
        </div>

        {/* ===========================================card3==================================================== */}

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div style={{ padding: 10 }}> {card3()}</div>
          <div style={{ padding: 10 }}> {card3()}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "row", marginTop: 30 }}>
          <div
            style={{
              borderBottomWidth: 3,
              borderColor: "#3772FF",

              borderBottomStyle: "solid",
              color: "#fff",
              fontSize: 22,
              fontWeight: "bold",
              height: 40,

              fontFamily: "Poppins",
            }}
          >
            First Tab
          </div>
          <div
            style={{
              borderBottomWidth: 3,
              borderColor: "#3772FF",
              height: 40,

              borderBottomStyle: "solid",
              color: "#fff",
              fontSize: 22,
              fontWeight: "bold",

              fontFamily: "Poppins",
              marginLeft: 30,
            }}
          >
            Second Tab
          </div>
        </div>
        <div
          style={{
            width: "100%",
            backgroundColor: "#191B20",
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "Poppins",
            borderRadius: 10,
            marginTop: 20,
            color: "white",
            fontSize: 14,
            paddingInline: 80,
          }}
        >
          <p>ASSET</p>
          <p>AMOUNT</p>
          <p>USER ACCOUNT</p>
          <p>REFERRAL EARNING</p>
        </div>

        {data?.data?.map((obj, index) => {
          return (
            <div
              key={index}
              style={{
                width: "100%",
                backgroundColor: "#191B20",
                display: "flex",
                justifyContent: "space-between",
                fontFamily: "Poppins",
                borderRadius: 10,
                marginTop: 5,
                color: "white",
                fontSize: 14,
                paddingInline: 50,
                paddingTop: 20,
                paddingBottom: 20,
              }}
            >
              <div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <img
                    src={obj.img}
                    style={{
                      width: 40,
                      height: 40,
                      marginInline: 4,
                      alignSelf: "center",
                      display: "flex",
                    }}
                  />

                  <div>
                    {" "}
                    <div>{obj.asset}</div>
                    <div
                      style={{
                        color: "grey",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      {obj.type}
                      <div
                        style={{
                          backgroundColor: "grey",
                          borderRadius: 10,
                          marginLeft: 5,
                          color: "white",
                          fontSize: 10,
                          textAlign: "center",
                          display: "flex",
                          flexDirection: "row",
                          paddingInline: 2,
                        }}
                      >
                        <img
                          src={obj.chain.img}
                          style={{
                            width: 10,
                            height: 10,
                            marginInline: 4,
                            alignSelf: "center",
                            display: "flex",
                          }}
                        />
                        {obj.chain.name}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>{obj.amount} BNB</div>
                <div style={{ color: "grey" }}>
                  {capitalizeFirstLetter(obj.state)}
                </div>
              </div>
              <div>
                <div>{account_(obj.user)}</div>
              </div>
              <div>
                <div>{obj.referral_earnings}BNB</div>
                <div
                  style={{
                    color: "grey",
                    alignContent: "center",
                    display: "flex",
                  }}
                  s
                >
                  View on BSC Scan{" "}
                  <OpenInNewIcon style={{ fontSize: 20, marginLeft: 5 }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ width: 3, backgroundColor: "#242731" }} />

      <div
        style={{
          width: 450,
          paddingInline: 35,
          borderLeftWidth: 5,
          borderStyle: "solid",
        }}
      >
        {/* drop down */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 15,
          }}
        >
          <div
            style={{
              color: "white",
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#353945",
              padding: 8,
              borderRadius: 10,
            }}
          >
            <div> Avalanche</div>
            <KeyboardArrowDownIcon style={{ fontSize: 25 }} />
          </div>
          <div
            style={{
              color: "white",
              display: "flex",
              flexDirection: "row",
              borderColor: "#3772FF",
              borderStyle: "solid",
              borderWidth: 3,
              padding: 8,
              borderRadius: 10,
            }}
          >
            <AccountBalanceWalletOutlinedIcon
              style={{ color: "#3772FF", marginRight: 10 }}
            />
            <div> 0xf6...1353</div>
            <KeyboardArrowDownIcon style={{ fontSize: 25 }} />
          </div>
        </div>

        {/*link*/}

        <div
          style={{
            alignItems: "center",
            display: "flex",
            color: "white",
            fontFamily: "Poppins",
            fontSize: 20,
          }}
        >
          <ArrowBackOutlinedIcon style={{ marginRight: 10 }} />
          Custom link
        </div>

        <div
          style={{
            alignItems: "center",
            fontFamily: "Poppins",
            color: "white",
            marginTop: 35,
          }}
        >
          https://testnet.xyz.xyz/trade?ref=
        </div>
        <input
          type={"text"}
          placeholder="ENTER"
          style={{
            backgroundColor: "#242731",
            borderWidth: 0,
            height: 40,
            width: "100%",
            borderRadius: 10,
            fontFamily: "Poppins",
            marginTop: 25,
            paddingLeft: 10,
            color: "white",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 25,
            width: "100%",
          }}
        >
          <div style={{ alignSelf: "center" }}>
            <div style={styles.button2}>
              <OpenInNewIcon style={{ fontSize: 20 }} />
              <div style={{ marginInline: 5 }}>Custom link</div>
            </div>
          </div>
          <div style={{ alignSelf: "center" }}>
            <div style={styles.button1}>
              <LogoutIcon style={{ fontSize: 20 }} />
              <div style={{ marginInline: 5 }}>Cancel</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  button: {
    backgroundColor: "#353945",
    color: "white",
    fontFamily: "Poppins",
    padding: 4,
    width: 80,
    textAlign: "center",
    borderRadius: 10,
    marginTop: 10,
    marginInline: 5,
  },
  button1: {
    color: "white",
    alignContent: "center",
    display: "flex",
    flexDirection: "row",
    padding: 8,
    borderRadius: 6,
    borderColor: "#242731",
    borderStyle: "solid",
    borderWidth: 2,
    width: 150,
    justifyContent: "center",
  },
  button2: {
    color: "white",
    alignContent: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#3772FF",
    padding: 8,
    borderRadius: 6,
    marginRight: 10,
    width: 150,
  },
  button4: {
    backgroundColor: "#353945",
    color: "white",
    fontFamily: "Poppins",
    padding: 20,
    // width: 80,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 10,
    marginTop: 10,
  },
  card1: {
    backgroundColor: "#191B20",
    fontFamily: "Poppins",
    fontSize: 14,
    padding: 15,
    fontWeight: "bold",
    display: "flex",
    flexDirection: "row",
    paddingInline: 30,
    justifyContent: "space-between",
    width: 350,
    borderRadius: 15,
  },
};

export default Content;
