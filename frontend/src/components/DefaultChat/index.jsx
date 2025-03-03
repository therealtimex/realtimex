import React, { useEffect, useState } from "react";
import {
  GithubLogo,
  GitMerge,
  EnvelopeSimple,
  Plus,
} from "@phosphor-icons/react";
import NewWorkspaceModal, {
  useNewWorkspaceModal,
} from "../Modals/NewWorkspace";
import paths from "@/utils/paths";
import { isMobile } from "react-device-detect";
import { SidebarMobileHeader } from "../Sidebar";
import ChatBubble from "../ChatBubble";
import System from "@/models/system";
import UserIcon from "../UserIcon";
import { userFromStorage } from "@/utils/request";
import useUser from "@/hooks/useUser";
import { useTranslation, Trans } from "react-i18next";
import Appearance from "@/models/appearance";

export default function DefaultChatContainer() {
  const { showScrollbar } = Appearance.getSettings();
  const [mockMsgs, setMockMessages] = useState([]);
  const { user } = useUser();
  const [fetchedMessages, setFetchedMessages] = useState([]);
  const {
    showing: showingNewWsModal,
    showModal: showNewWsModal,
    hideModal: hideNewWsModal,
  } = useNewWorkspaceModal();
  const popMsg = !window.localStorage.getItem("anythingllm_intro");
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedMessages = await System.getWelcomeMessages();
      setFetchedMessages(fetchedMessages);
    };
    fetchData();
  }, []);

  const MESSAGES = [
    <React.Fragment key="msg1">
      <MessageContainer>
        <MessageContent>
          <UserIcon user={{ uid: "system" }} role={"assistant"} />
          <MessageText>Welcome to REALTIMEX AI!</MessageText>
        </MessageContent>
      </MessageContainer>
    </React.Fragment>,

    
  ];

  useEffect(() => {
    function processMsgs() {
      if (!!window.localStorage.getItem("anythingllm_intro")) {
        setMockMessages([...MESSAGES]);
        return false;
      } else {
        setMockMessages([MESSAGES[0]]);
      }

      var timer = 500;
      var messages = [];

      MESSAGES.map((child) => {
        setTimeout(() => {
          setMockMessages([...messages, child]);
          messages.push(child);
        }, timer);
        timer += 2_500;
      });
      window.localStorage.setItem("anythingllm_intro", 1);
    }

    processMsgs();
  }, []);

  return (
    <div
      style={{ height: isMobile ? "100%" : "calc(100% - 32px)" }}
      className={`transition-all duration-500 relative md:ml-[2px] md:mr-[16px] md:my-[16px] md:rounded-[16px] bg-theme-bg-secondary light:border-[1px] light:border-theme-sidebar-border w-full h-full overflow-y-scroll ${
        showScrollbar ? "show-scrollbar" : "no-scroll"
      }`}
    >
      {isMobile && <SidebarMobileHeader />}
      {fetchedMessages.length === 0
        ? mockMsgs.map((content, i) => {
            return <React.Fragment key={i}>{content}</React.Fragment>;
          })
        : fetchedMessages.map((fetchedMessage, i) => {
            return (
              <React.Fragment key={i}>
                <ChatBubble
                  message={
                    fetchedMessage.user === ""
                      ? fetchedMessage.response
                      : fetchedMessage.user
                  }
                  type={fetchedMessage.user === "" ? "response" : "user"}
                  popMsg={popMsg}
                />
              </React.Fragment>
            );
          })}
      {showingNewWsModal && <NewWorkspaceModal hideModal={hideNewWsModal} />}
    </div>
  );
}

function MessageContainer({ children }) {
  return (
    <div className="flex justify-center items-end w-full">
      <div className="py-6 px-4 w-full flex gap-x-5 md:max-w-[80%] flex-col">
        {children}
      </div>
    </div>
  );
}

function MessageContent({ children }) {
  return <div className="flex gap-x-5">{children}</div>;
}

function MessageText({ children }) {
  return (
    <span className="text-white/80 light:text-theme-text-primary font-light text-[14px] flex flex-col gap-y-1 mt-2">
      {children}
    </span>
  );
}
