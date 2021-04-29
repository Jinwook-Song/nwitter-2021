import Nweet from "components/Nweet";
import { dbService } from "fbase";
import { useEffect, useState } from "react";
import NweetFactory from "components/NweetFactory";

// eslint-disable-next-line
export default ({ userObj }) => {
  const [nweets, setNweets] = useState([]);

  useEffect(() => {
    const getData = dbService
      .collection("nweets")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        const nweetArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNweets(nweetArray);
      });
    return () => getData();
  }, []);

  return (
    <div className="container">
      <NweetFactory userObj={userObj} />
      <div style={{ marginTop: 30 }}>
        {nweets.map((nweet) => (
          <Nweet
            key={nweet.id}
            nweetObj={nweet}
            isOwner={nweet.creatorId === userObj.uid ? true : false}
          />
        ))}
      </div>
    </div>
  );
};
