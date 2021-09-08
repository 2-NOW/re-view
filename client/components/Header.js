import styled from 'styled-components';
import { Search, Globe, Menu, User } from 'react-feather';
import { useRouter } from 'next/router';

export default function Header({ placeholder }) {
  const router = useRouter();
  return (
    <>
      <div className="headInner">
        <div className="logo" onClick={() => router.push('/')}>
          <span>KDIER</span>
        </div>
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
    </>
  );
}
