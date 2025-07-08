// convex/notifications.ts

import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// 🔁 Query : récupérer les notifications d'un utilisateur
export const getNotifications = query({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("notifications")
      .withIndex("by_userId", (q) => q.eq("userId", args.userId))
      .order("desc")
      .collect();
  },
});

// ✅ Mutation : créer une notification
export const createNotification = mutation({
  args: {
    userId: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("notifications", {
      userId: args.userId,
      message: args.message,
      read: false,
      createdAt: Date.now(),
    });
  },
});

// ☑️ Mutation : marquer comme lu
export const markAsRead = mutation({
  args: { id: v.id("notifications") },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, { read: true });
  },
});
