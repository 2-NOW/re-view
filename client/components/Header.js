import styled from 'styled-components';
import { Search, Globe, Menu, User } from 'react-feather';
import { useRouter } from 'next/router';

export default function Header({ placeholder }) {
  const router = useRouter();
  return (
    <HeaderSection>
      <div className="headInner">
        <div className="logo" onClick={() => router.push('/')}>
          <span>KDIER</span>
        </div>
        <nav>
          <a href="#">강의검색</a>
          <a href="#">시간표</a>
        </nav>
        {/* 모바일 메뉴 */}
        <form className="search">
          <input
            type="text"
            placeholder={placeholder ? placeholder : 'class name or number'}
            required
          />
          <button type="submit">
            <Search />
          </button>
        </form>
        <div className="profile">
          <a href="#" className="user">
            <User className="userIcon" />
          </a>
        </div>
      </div>
    </HeaderSection>
  );
}

const HeaderSection = styled.header`
  position: fixed;
  top: 0;
  color: red;
  // width: 100%;
  border: 1px solid;

  .user,
  .profile,
  .logo,
  nav {
    display: flex;
    align-items: center;
  }

  .headerInner {
    display: flex;
    grid-template-columns: 1fr 2fr 1fr;
  }

  nav {
    border: 1px solid;
    flex: 1;
    justify-content: center;
  }

  form {
    border: 1px solid;
  }
`;

// const HeaderSection = styled.header`
//   position: fixed;
//   top: 0;
//   color: #fafafc;
//   background-color: red;
//   width: 100%;

//   input {
//     width: 100%;
//   }

//   .user,
//   .profile,
//   .logo,
//   nav {
//     display: flex;
//   }

//   .headerInner {
//     margin: 0 auto;
//     display: grid;
//     grid-template-columns: 1fr 2fr 1fr;
//   }

//   nav {
//     flex: 1;
//     justify-content: center;
//     a {
//       position: relative;
//     }
//   }

//   .profile {
//     justify-content: flex-end;
//   }
// `;
