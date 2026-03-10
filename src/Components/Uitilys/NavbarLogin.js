import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faSignOutAlt,
  faCog,
  faClipboardList,
  faShoppingBag,
  faChevronDown,
  faTachometerAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as faHeartOutline,
  faUser as faUserOutline,
} from "@fortawesome/free-regular-svg-icons";

import avatar from "../../assets/icons/man-avatar.png";
import useNavbarSearchHook from "../../Hook/search/navbar-search-hook";
import useGetAllUserCartHook from "../../Hook/cart/get-all-user-cart-hook";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

  :root {
    --clr-bg: #ffffff;
    --clr-surface: #fafaf9;
    --clr-border: #e8e4df;
    --clr-ink: #1a1714;
    --clr-muted: #7a746e;
    --clr-accent: #c8a96e;
    --clr-accent-dark: #a8894e;
    --clr-red: #c0392b;
    --transition: 240ms cubic-bezier(0.4, 0, 0.2, 1);
    --shadow-sm: 0 1px 3px rgba(26,23,20,.06), 0 1px 2px rgba(26,23,20,.04);
    --shadow-lg: 0 12px 40px rgba(26,23,20,.14), 0 4px 12px rgba(26,23,20,.08);
    --radius: 4px;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .top-bar {
    background: var(--clr-ink);
    color: rgba(255,255,255,.72);
    text-align: center;
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    letter-spacing: .06em;
    padding: 9px 16px;
  }
  .top-bar strong { color: var(--clr-accent); font-weight: 600; }

  .nb-header {
    background: var(--clr-bg);
    border-bottom: 1px solid var(--clr-border);
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: var(--shadow-sm);
  }
  .nb-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
    display: grid;
    grid-template-columns: 220px 1fr auto;
    align-items: center;
    gap: 24px;
    height: 72px;
  }

  .nb-logo { text-decoration: none; display: flex; flex-direction: column; line-height: 1; }
  .nb-logo-main { font-family: 'Cormorant Garamond', serif; font-size: 26px; font-weight: 700; color: var(--clr-ink); letter-spacing: .04em; }
  .nb-logo-sub { font-family: 'DM Sans', sans-serif; font-size: 9px; font-weight: 500; letter-spacing: .22em; text-transform: uppercase; color: var(--clr-accent); margin-top: 2px; }

  .nb-search { display: flex; align-items: center; border: 1px solid var(--clr-border); border-radius: var(--radius); background: var(--clr-surface); transition: border-color var(--transition), box-shadow var(--transition); overflow: hidden; }
  .nb-search:focus-within { border-color: var(--clr-accent); box-shadow: 0 0 0 3px rgba(200,169,110,.15); }
  .nb-search input { flex: 1; border: none; background: transparent; font-family: 'DM Sans', sans-serif; font-size: 14px; color: var(--clr-ink); padding: 11px 16px; outline: none; }
  .nb-search input::placeholder { color: var(--clr-muted); }
  .nb-search button { width: 48px; background: var(--clr-ink); border: none; color: white; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 13px; transition: background var(--transition); padding: 11px 0; align-self: stretch; }
  .nb-search button:hover { background: var(--clr-accent-dark); }

  .nb-icons { display: flex; align-items: center; gap: 4px; }
  .nb-icon-btn { display: flex; flex-direction: column; align-items: center; gap: 3px; text-decoration: none; color: var(--clr-ink); padding: 8px 12px; border-radius: var(--radius); transition: background var(--transition), color var(--transition); position: relative; cursor: pointer; border: none; background: none; font-family: 'DM Sans', sans-serif; }
  .nb-icon-btn:hover { background: var(--clr-surface); color: var(--clr-accent); }
  .nb-icon-label { font-size: 10px; font-weight: 500; letter-spacing: .04em; text-transform: uppercase; color: inherit; }
  .nb-cart-wrap { position: relative; }
  .nb-badge { position: absolute; top: -5px; right: -8px; min-width: 18px; height: 18px; background: var(--clr-accent); color: white; border-radius: 50px; font-family: 'DM Sans', sans-serif; font-size: 10px; font-weight: 700; display: flex; align-items: center; justify-content: center; padding: 0 4px; border: 2px solid white; }
  .nb-divider { width: 1px; height: 28px; background: var(--clr-border); margin: 0 4px; }

  .nb-login-btn { display: flex; align-items: center; gap: 8px; text-decoration: none; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 600; letter-spacing: .04em; color: var(--clr-ink); border: 1.5px solid var(--clr-ink); border-radius: var(--radius); padding: 8px 16px; transition: background var(--transition), color var(--transition); }
  .nb-login-btn:hover { background: var(--clr-ink); color: white; }

  .nb-avatar-wrap { position: relative; }
  .nb-avatar-trigger { display: flex; align-items: center; gap: 8px; padding: 6px 10px; border-radius: var(--radius); cursor: pointer; transition: background var(--transition); border: none; background: none; }
  .nb-avatar-trigger:hover { background: var(--clr-surface); }
  .nb-avatar-img { width: 34px; height: 34px; border-radius: 50%; object-fit: cover; border: 2px solid var(--clr-border); transition: border-color var(--transition); }
  .nb-avatar-trigger:hover .nb-avatar-img { border-color: var(--clr-accent); }
  .nb-avatar-chevron { font-size: 10px; color: var(--clr-muted); transition: transform var(--transition); }
  .nb-avatar-chevron.open { transform: rotate(180deg); }

  .nb-dropdown { position: absolute; top: calc(100% + 12px); right: 0; width: 220px; background: white; border: 1px solid var(--clr-border); border-radius: 8px; box-shadow: var(--shadow-lg); opacity: 0; visibility: hidden; transform: translateY(-8px); transition: opacity var(--transition), transform var(--transition), visibility var(--transition); z-index: 999; overflow: hidden; }
  .nb-dropdown.open { opacity: 1; visibility: visible; transform: translateY(0); }
  .nb-dropdown-header { padding: 16px 18px 12px; border-bottom: 1px solid var(--clr-border); background: var(--clr-surface); }
  .nb-dropdown-name { font-family: 'Cormorant Garamond', serif; font-size: 17px; font-weight: 700; color: var(--clr-ink); line-height: 1.2; }
  .nb-dropdown-role { font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 500; letter-spacing: .1em; text-transform: uppercase; color: var(--clr-accent); margin-top: 3px; }
  .nb-dropdown-menu { list-style: none; padding: 8px 0; }
  .nb-dropdown-menu li { display: flex; align-items: center; gap: 12px; padding: 10px 18px; font-family: 'DM Sans', sans-serif; font-size: 13.5px; color: var(--clr-ink); cursor: pointer; transition: background var(--transition), color var(--transition); }
  .nb-dropdown-menu li:hover { background: var(--clr-surface); color: var(--clr-accent); }
  .nb-dropdown-menu li a { text-decoration: none; color: inherit; flex: 1; }
  .nb-dropdown-menu li svg { color: var(--clr-muted); font-size: 14px; flex-shrink: 0; }
  .nb-dropdown-menu li:hover svg { color: var(--clr-accent); }
  .nb-dropdown-divider { height: 1px; background: var(--clr-border); margin: 4px 0; }
  .nb-dropdown-menu .logout-item { color: var(--clr-red) !important; }
  .nb-dropdown-menu .logout-item svg { color: var(--clr-red) !important; }
  .nb-dropdown-menu .logout-item:hover { background: #fff5f5 !important; }

  @media (max-width: 900px) {
    .nb-inner { grid-template-columns: auto 1fr auto; gap: 16px; padding: 0 16px; }
    .nb-logo-sub { display: none; }
  }
  @media (max-width: 600px) {
    .nb-inner { grid-template-columns: 1fr; grid-template-rows: auto auto; height: auto; padding: 12px 16px; gap: 12px; }
    .nb-logo { display: none; }
    .nb-icons { justify-content: flex-end; }
    .nb-icon-label { display: none; }
  }
`;

const NavbarLogin = () => {
  const { OnChangeSearch } = useNavbarSearchHook();
  const word = localStorage.getItem("searchword") || "";

  // ✅ FIX 1: was broken — "seGetAllUserCartHook().itemsNum" (missing "u" + not assigned)
  const { itemsNum } = useGetAllUserCartHook();

  // ✅ FIX 2: safely parse user from localStorage
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem("user");
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setDropdownOpen((v) => !v);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    window.location.href = "/";
  };

  // Sync user if localStorage changes (e.g. login in another tab)
  useEffect(() => {
    const syncUser = () => {
      try {
        const stored = localStorage.getItem("user");
        setUser(stored ? JSON.parse(stored) : null);
      } catch {
        setUser(null);
      }
    };
    window.addEventListener("storage", syncUser);
    return () => window.removeEventListener("storage", syncUser);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <style>{styles}</style>

      {/* Announcement bar */}
      <div className="top-bar">
        <strong>FREE SHIPPING</strong> on all orders over $75 &nbsp;·&nbsp; Use code{" "}
        <strong>WELCOME15</strong> for 15% off your first order
      </div>

      <header className="nb-header">
        <div className="nb-inner">

          {/* Logo */}
          <a href="/" className="nb-logo">
            <span className="nb-logo-main">ShopZone</span>
            <span className="nb-logo-sub">Premium Collection</span>
          </a>

          {/* Search */}
          <div className="nb-search">
            <input
              value={word}
              onChange={OnChangeSearch}
              type="text"
              placeholder="Search for products, brands…"
            />
            <button type="button" aria-label="Search">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>

          {/* Icons */}
          <div className="nb-icons">

            {user ? (
              <div className="nb-avatar-wrap" ref={dropdownRef}>
                <button
                  className="nb-avatar-trigger"
                  onClick={toggleDropdown}
                  aria-expanded={isDropdownOpen}
                  aria-label="Account menu"
                >
                  <img src={avatar} alt="Avatar" className="nb-avatar-img" />
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`nb-avatar-chevron ${isDropdownOpen ? "open" : ""}`}
                  />
                </button>

                <div className={`nb-dropdown ${isDropdownOpen ? "open" : ""}`}>
                  <div className="nb-dropdown-header">
                    {/* ✅ FIX 3: use optional chaining ?. everywhere to avoid crashes */}
                    <div className="nb-dropdown-name">{user?.name || "My Account"}</div>
                    <div className="nb-dropdown-role">{user?.role || "user"}</div>
                  </div>
                  <ul className="nb-dropdown-menu">
                    <li>
                      <FontAwesomeIcon
                        icon={user?.role === "admin" ? faTachometerAlt : faUser}
                      />
                      {user?.role === "admin" ? (
                        <a href="/admin/dashboard">Dashboard</a>
                      ) : (
                        <a href="/user/profile">My Profile</a>
                      )}
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faClipboardList} />
                      {user?.role === "admin" ? (
                        <a href="/admin/allorders">All Orders</a>
                      ) : (
                        <a href="/user/allorders">My Orders</a>
                      )}
                    </li>
                    {user?.role === "admin" && (
                      <li>
                        <FontAwesomeIcon icon={faCog} />
                        <a href="/admin/settings">Settings</a>
                      </li>
                    )}
                    <div className="nb-dropdown-divider" />
                    <li className="logout-item" onClick={handleLogout}>
                      <FontAwesomeIcon icon={faSignOutAlt} />
                      <span>Sign Out</span>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <a href="/login" className="nb-login-btn">
                <FontAwesomeIcon icon={faUserOutline} />
                Sign In
              </a>
            )}

            <div className="nb-divider" />

            {/* Wishlist */}
            <a href="/user/favoriteproducts" className="nb-icon-btn" aria-label="Wishlist">
              <FontAwesomeIcon icon={faHeartOutline} style={{ fontSize: 18 }} />
              <span className="nb-icon-label">Wishlist</span>
            </a>

            {/* Cart */}
            <a href="/cart" className="nb-icon-btn" aria-label="Cart">
              <div className="nb-cart-wrap">
                <FontAwesomeIcon icon={faShoppingBag} style={{ fontSize: 18 }} />
                {/* ✅ FIX 1 result: itemsNum now correctly comes from the hook */}
                {itemsNum > 0 && (
                  <span className="nb-badge">{itemsNum}</span>
                )}
              </div>
              <span className="nb-icon-label">Cart</span>
            </a>

          </div>
        </div>
      </header>
    </>
  );
};

export default NavbarLogin;