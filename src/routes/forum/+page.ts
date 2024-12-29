
import type { PostModel } from "$lib/models/PostModel";
import type { UserModel } from "$lib/models/UserModel";
import type { PostTagModel } from "$lib/models/PostTagModel";
import type { CommentModel } from "$lib/models/CommentModel";
import { PostTagType } from "$lib/enums/PostTagType";
import logoImage from '$lib/images/KarmaLibLogo.png';
import { PostStatus } from "$lib/enums/PostTypes";

export const prerender = true;

export const load = (): { posts: PostModel[], tags: PostTagModel[], popularPosts: PostModel[] } => {
    const testUser: UserModel = {
        id: "123e4567-e89b-12d3-a456-426614174000",
        username: "TestUser",
        publicUsername: "PublicTestUser",
        email: "testuser@example.com",
        registrationDate: "2023-01-01T00:00:00.000Z",
        description: "This is a test user.",
        isStaff: true,
        isSuperuser: false,
        sex: 1,
        isPrivate: false,
        isOnline: true,
        avatar: {
            blob: logoImage, 
			path: "/"
        }
    };

    const testComments: CommentModel[] = [
        {
            id: "comment-1",
            author: testUser,
            text: "This is a test comment.",
            likes: 5,
            dislikes: 1,
            createdAt: new Date(),
            isDeleted: false,
            isSpoiler: false,
            replies: []
        },
        {
            id: "comment-2",
            author: testUser,
            text: "This is a reply to the first comment.",
            likes: 3,
            dislikes: 0,
            createdAt: new Date(),
            parentCommentId: "comment-1",
            isDeleted: false,
            isSpoiler: false,
            replies: []
        }
    ];

    const testTags: PostTagModel[] = [
        {
            name: "Announcement",
            slug: "announcement",
            description: "Tag for announcements",
            type: PostTagType.Category,
            isVisible: true
        },
        {
            name: "Info",
            slug: "info",
            description: "General informational posts",
            type: PostTagType.Label,
            isVisible: true
        }
    ];

    const posts: PostModel[] = [
        {
            author: testUser,
            title: "Domain Blocked by Authorities",
            text: "Hello, everyone! We're working hard to resolve this issue as soon as possible.",
            likesCount: 44,
            dislikesCount: 4,
            status: PostStatus.Published,
            pinned: true,
            hidden: false,
            approvedById: "moderator-1",
            comments: testComments,
            attachments: [
                {
                    path: "/images/blocked-domain.png"
                }
            ],
            tags: testTags,
            createdAt: new Date()
        },
        {
            author: testUser,
            title: "dasdasaewr Maintenance Scheduled",
            text: "We have scheduled site maintenance for the upcoming weekend.",
            likesCount: 24,
            dislikesCount: 1,
            status: PostStatus.Published,
            pinned: false,
            hidden: false,
            approvedById: "moderator-2",
            comments: [],
            attachments: [],
            tags: [testTags[0]],
            createdAt: new Date()
        },
		{
            author: testUser,
            title: "Site dasdasdsa Scheduled",
            text: "We have scheduled site maintenance for the upcoming weekend.",
            likesCount: 24,
            dislikesCount: 1,
            status: PostStatus.Published,
            pinned: false,
            hidden: false,
            approvedById: "moderator-2",
            comments: [],
            attachments: [],
            tags: [testTags[0]],
            createdAt: new Date()
        },
		{
            author: testUser,
            title: "dasdas Maintenance Scheduled",
            text: "We have scheduled site maintenance for the upcoming weekend.",
            likesCount: 24,
            dislikesCount: 1,
            status: PostStatus.Published,
            pinned: false,
            hidden: false,
            approvedById: "moderator-2",
            comments: [],
            attachments: [],
            tags: [testTags[0]],
            createdAt: new Date()
        }
    ];

    return { posts, tags: testTags, popularPosts: posts };
};
