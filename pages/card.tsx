import { observer } from "mobx-react";
import { useRouter } from "next/router";
import { useEffect } from "react";

import UserAvatar from "../components/avatar";
import useStore from "../hooks/useStore";

const Card = observer(() => {

  const router = useRouter();
  const { boards } = useStore();

  useEffect(() => {
    const { id } = router.query;

    if(!router.isReady) return;

    if(id) {
      boards.getActiveCard(`${id}`);
    }
    
  }, [router.isReady])

  const transformDate = (value: string): string => {
    const date = new Date(value);
    const timeOptions = {
      hour: 'numeric', 
      minute: 'numeric',
    };
    return date.toLocaleDateString("ru-RU", timeOptions);
  }

  return <div>
    <>Card Name: {boards.activeCard?.name}</><br/><br/>
    <>Members: {boards.activeCard?.members?.map(member => {
      return <UserAvatar size="mini" alt={member.fullName} src={member.avatarUrl + '/50.png'} key={member.id} />
      })}
    </><br/><br/>
    <>Desc: {boards.activeCard?.desc}</><br/><br/>
    <>Comments: {boards.activeCard?.comments?.map(comment => {
      return <div style={{display: 'flex', alignItems: 'center'}} key={comment.id}>
        <UserAvatar size="mini" alt={comment.memberCreator.fullName} src={comment.memberCreator.avatarUrl + '/50.png'} />
        {comment.memberCreator.fullName}<br/>
        {comment.data.text}
        </div>
    })}</><br/><br/>
    <>Last activity: {transformDate(`${boards.activeCard?.dateLastActivity}`)}</>
  </div>;
});

export default Card;
