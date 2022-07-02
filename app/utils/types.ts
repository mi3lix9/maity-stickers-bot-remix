import type { Context, SessionFlavor } from "grammy";
import type { Conversation, ConversationFlavor } from "@grammyjs/conversations";
// import type { FileFlavor } from "https://deno.land/x/grammy_files/mod.ts";

export interface SessionData {
  /**
   * set of sticker sets' names
   */
  sets: Set<string>;
  /**
   * fast mode enable users to add stickers automatically to special packs
   * without the need to add title,name, or emojies to the set.
   *
   * Currently doesn't do anything.
   */
  fastMode: boolean;
}

export type MyContext = Context &
  SessionFlavor<SessionData> &
  ConversationFlavor;

export type MyConversation = Conversation<MyContext>;
