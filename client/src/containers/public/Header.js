import { useCallback } from "react";
import logo from "../../assets/logowithoutbg.png";
import { Button } from "../../components";
import icons from "../../ultils/icons";
import { useNavigate, Link } from "react-router-dom";
import { path } from "../../ultils/constants";

const { GoPlusCircle } = icons;

function Header() {
  const nagative = useNavigate();
  const goLogin = useCallback((flag) => {
    nagative(path.LOGIN, {state: {flag}});
  }, []);

  return (
    <div className="w-1100">
      <div className="w-1100 flex items-center justify-between  h-[70px]">
        <Link to={'/'}>
        <img
          src={logo}
          alt="logo"
          className="w-[240px] object-container"
        />
        </Link>
        <div className="flex items-center gap-1">
          <small>Phòng trọ 123.com xin chào !</small>
          <Button
            text={"Đăng ký"}
            textColor={`text-white`}
            bgColor={`bg-secondary1`}
            onClick={() => goLogin(true)}
          />
          <Button
            text={"Đăng nhập"}
            textColor={`text-white`}
            bgColor={`bg-secondary1`}
            onClick={() => goLogin(false)}
          />
          <Button
            text={"Đăng tin mới"}
            textColor={`text-white`}
            bgColor={`bg-secondary2`}
            IcAfter={GoPlusCircle}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
