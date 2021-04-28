import Nweet from "components/Nweet";
import { dbService, storageService } from "fbase";
import { useEffect, useState } from "react";
import NweetFactory from "components/NweetFactory";

// eslint-disable-next-line
export default ({ userObj }) => {
  const [nweets, setNweets] = useState([]);

  useEffect(() => {
    dbService
      .collection("nweets")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        const nweetArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNweets(nweetArray);
      });
  }, []);

  return (
    <div>
      <NweetFactory userObj={userObj} />
      <div>
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
