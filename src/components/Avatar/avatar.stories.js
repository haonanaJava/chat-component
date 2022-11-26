import Avatar from ".";
import face1 from "assets/images/face-female-1.jpg";
import face2 from "assets/images/face-female-2.jpg";
import face3 from "assets/images/face-female-3.jpg";
import face4 from "assets/images/face-female-4.jpg";

export default {
  title: "UI 组件/Avatar",
  component: Avatar,
};

export const Default = () => <Avatar src={face1} />;

export const Sizes = () => {
  return (
    <div className="row-elements">
      <Avatar size="48px" src={face1} />
      <Avatar size="56px" src={face2} />
      <Avatar size="64px" src={face3} />
      <Avatar size="72px" src={face4} />
    </div>
  );
};

export const WithStatus = () => {
  return (
    <div className="row-elements">
      <Avatar size="48px" src={face1} status="online" />
      <Avatar size="56px" src={face2} status="offline" />
      <Avatar size="72px" src={face4} status="online" statusIconSize="12px" />
    </div>
  );
};
