import styles from "../css/SignupPage.module.css";
import BackButton from "./BackButton";
const SignupPage = () => {

  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <BackButton/>
          <p>회원가입</p>
          <input type="text" placeholder="이메일"/>
          <input type="text" placeholder="비밀번호"/>
          <input type="text" placeholder="이름"/>
          <input type="text" placeholder="주민등록번호"/>
          <input type="text" placeholder="닉네임"/>
          <input type="text" placeholder="핸드폰 번호"/>
          <input type="text" placeholder="주소"/>
          <p className="finalCheck"></p>
          <p>가입</p>
        </div>
      </div>
    </>
  );
};
export default SignupPage;
