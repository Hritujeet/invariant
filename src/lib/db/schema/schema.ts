import { relations } from "drizzle-orm/_relations";
import { AnyPgColumn, boolean, integer, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core/table";
import { user } from "./auth-schema";

/*
Tables
// 1. Blogs
// 2. Devlogs
// 3. Derivations
// 4. Projects
// 5. Comments
// 6. Category
*/

export const category = pgTable("category", {
    id: uuid("id").primaryKey().notNull().unique(),
    name: varchar("name", { length: 255 }).notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull().$onUpdate(() => new Date()),
})

export const blogTable = pgTable("blog", {
    id: uuid("id").primaryKey().notNull().unique(),
    title: varchar("title", { length: 255 }).notNull(),
    img: varchar("img", { length: 255 }).notNull(),
    content: text("content").notNull(),
    views: integer("views").default(0).notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull().$onUpdate(() => new Date()),
})

export const blogLikeTable = pgTable("blog_like", {
    blogId: uuid("blog_id").references(() => blogTable.id),
    // Better Auth user id is text
    userId: text("user_id").references(() => user.id),
    createdAt: timestamp("created_at").defaultNow().notNull(),
})

export const blogCategoryTable = pgTable("blog_category", {
    blogId: uuid("blog_id").references(() => blogTable.id),
    categoryId: uuid("category_id").references(() => category.id),
    createdAt: timestamp("created_at").defaultNow().notNull(),
})

export const derivationsTable = pgTable("derivation", {
    id: uuid("id").primaryKey().unique().notNull(),
    title: varchar("title", { length: 255 }).notNull(),
    slug: varchar("slug", { length: 500 }).notNull().unique(),
    expression: varchar("expression", { length: 500 }).notNull(),
    description: varchar("description", { length: 500 }).notNull(),
    pdf: varchar("pdf", { length: 500 }).notNull(),
    img: varchar("images", { length: 500 }).notNull(),
    content: text("content").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull().$onUpdate(() => new Date()),
})

export const devlogs = pgTable("devlogs", {
    id: uuid("id").primaryKey().unique().notNull(),
    title: varchar("title", { length: 255 }).notNull(),
    slug: varchar("slug", { length: 400 }).notNull().unique(),
    description: varchar("description", { length: 500 }).notNull(),
    content: text("content").notNull(),
    images: varchar("images", { length: 500 }).array().notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull().$onUpdate(() => new Date()),
})

export const projectsTable = pgTable("projects", {
    id: uuid("id").primaryKey().unique().notNull(),
    title: varchar("title", { length: 255 }).notNull(),
    description: varchar("description", { length: 500 }).notNull(),
    link: varchar("link", { length: 750 }).notNull(),
    image: varchar("image", { length: 500 }).notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull().$onUpdate(() => new Date()),
})

export const commentTable = pgTable("comment", {
    id: uuid().notNull().unique().primaryKey(),
    comment: text("comment").notNull(),
    // Better Auth user id is text
    authorId: text("author_id").references(() => user.id),
    blogId: uuid("blog_id").references(() => blogTable.id),
    derivationId: uuid("derivation_id").references(() => derivationsTable.id),
    devlogId: uuid("devlog_id").references(() => devlogs.id),
    isReply: boolean("is_reply").default(false).notNull(),
    replyTo: uuid("reply_to").references((): AnyPgColumn => commentTable.id),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull().$onUpdate(() => new Date()),
})

export const blogRelations = relations(blogTable, ({ many }) => ({
    comments: many(commentTable),
    likes: many(blogLikeTable),
    categories: many(blogCategoryTable),
}))

export const derivationRelations = relations(derivationsTable, ({ many }) => ({
    comments: many(commentTable),
}))

export const devlogRelations = relations(devlogs, ({ many }) => ({
    comments: many(commentTable),
}))

export const categoryRelations = relations(category, ({ many }) => ({
    blogs: many(blogCategoryTable),
}))

export const blogLikeRelations = relations(blogLikeTable, ({ one }) => ({
    blog: one(blogTable, {
        fields: [blogLikeTable.blogId],
        references: [blogTable.id],
    }),
    user: one(user, {
        fields: [blogLikeTable.userId],
        references: [user.id],
    }),
}))

export const blogCategoryRelations = relations(blogCategoryTable, ({ one }) => ({
    blog: one(blogTable, {
        fields: [blogCategoryTable.blogId],
        references: [blogTable.id],
    }),
    category: one(category, {
        fields: [blogCategoryTable.categoryId],
        references: [category.id],
    }),
}))

export const commentRelations = relations(commentTable, ({ one, many }) => ({
    blog: one(blogTable, {
        fields: [commentTable.blogId],
        references: [blogTable.id],
    }),
    derivation: one(derivationsTable, {
        fields: [commentTable.derivationId],
        references: [derivationsTable.id],
    }),
    devlog: one(devlogs, {
        fields: [commentTable.devlogId],
        references: [devlogs.id],
    }),
    user: one(user, {
        fields: [commentTable.authorId],
        references: [user.id],
    }),
    parentComment: one(commentTable, {
        fields: [commentTable.replyTo],
        references: [commentTable.id],
        relationName: "replies",
    }),
    replies: many(commentTable, { relationName: "replies" }),
}))
