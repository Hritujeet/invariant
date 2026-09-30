import { relations } from "drizzle-orm/_relations";
import { AnyPgColumn, boolean, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core/table";

/*
Tables
// 1. Derivations
// 2. Comments
*/

export const derivationsTable = pgTable("derivation", {
    id: uuid("id").primaryKey().unique().notNull(),
    title: varchar("title", { length: 255 }).notNull(),
    slug: varchar("slug", { length: 500 }).notNull().unique(),
    expression: varchar("expression", { length: 500 }).notNull(),
    description: varchar("description", { length: 500 }).notNull(),
    pdf: varchar("pdf", { length: 500 }).notNull(),
    content: text("content").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull().$onUpdate(() => new Date()),
})

export const commentTable = pgTable("comment", {
    id: uuid().notNull().unique().primaryKey(),
    comment: text("comment").notNull(),
    clerkUserId: text("clerk_user_id").notNull(),
    derivationId: uuid("derivation_id").references(() => derivationsTable.id),
    isReply: boolean("is_reply").default(false).notNull(),
    replyTo: uuid("reply_to").references((): AnyPgColumn => commentTable.id),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull().$onUpdate(() => new Date()),
})

export const derivationRelations = relations(derivationsTable, ({ many }) => ({
    comments: many(commentTable),
}))

export const commentRelations = relations(commentTable, ({ one, many }) => ({
    derivation: one(derivationsTable, {
        fields: [commentTable.derivationId],
        references: [derivationsTable.id],
    }),
    parentComment: one(commentTable, {
        fields: [commentTable.replyTo],
        references: [commentTable.id],
        relationName: "replies",
    }),
    replies: many(commentTable, { relationName: "replies" }),
}))
