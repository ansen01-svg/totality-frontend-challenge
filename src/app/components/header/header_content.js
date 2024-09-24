"use client";

import { useState, useEffect } from "react";
import Popover from "@mui/material/Popover";
import Links from "./links/links";
import AuthenticatedContent from "./user_modal/authenticated_content";
import UnauthenticatedContent from "./user_modal/unauthenticated_content";

export default function HeaderContent(props) {
  const { token, sessionData } = props;

  const [anchorEl, setAnchorEl] = useState(null);
  const [user, setUser] = useState(null);

  // fetch user on load and when token changes
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/user/getCurrentUser`)
      .then((response) => response.json())
      .then((data) => {
        if (data.data) {
          setUser(data.data);
        } else {
          setUser(null);
        }
      })
      .catch((error) => console.log("fetch error-", error));
  }, [token]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="h-full flex flex-row items-center justify-center">
      <Links user={user} handleClick={handleClick} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{ ".MuiPaper-root": { borderRadius: "12px" } }}
      >
        {user ? (
          <AuthenticatedContent
            handleClose={handleClose}
            user={user}
            sessionData={sessionData}
          />
        ) : (
          <UnauthenticatedContent handleClose={handleClose} />
        )}
      </Popover>
    </div>
  );
}
