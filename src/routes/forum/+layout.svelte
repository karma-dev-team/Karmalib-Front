<script lang="ts">
	import TagsList from "$lib/components/TagsList.svelte";
	import { PostTagType } from "$lib/enums/PostTagType";
	import { PostStatus } from "$lib/enums/PostTypes";
	import type { PostModel } from "$lib/models/PostModel";
	import type { PostTagModel } from "$lib/models/PostTagModel";
	import type { UserModel } from "$lib/models/UserModel";
	import logoImage from '$lib/images/KarmaLibLogo.png';

	let tags: PostTagModel[] = [
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


	const popularPosts: PostModel[] = [
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
            comments: [],
            attachments: [
                {
                    path: "/images/blocked-domain.png"
                }
            ],
            tags: [],
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
            tags: [],
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
            tags: [],
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
            tags: [],
            createdAt: new Date()
        }
    ];
</script>

<div class="forum-page">
	<slot></slot>
	
    <div class="forum-right-bar">
        <a href="/forum/create" class="forum-create-post">
            <span class="create-post">Создать пост</span>
        </a>
        <div class="popular-tag">
            <h3>Популярные теги</h3>
            <TagsList tags={tags}/>
        </div>
        <div class="popular-posts">
            <h3>Поплуярные посты за неделю</h3>
            <div class="popular-posts-container">
            {#each popularPosts as popularPost, i}
                <a class="post-popular-li" href="/forum/post/{popularPost.id}">
                    <div class="post-name">
                        {popularPost.title}
                    </div>
                    <div class="post-likes">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            fill="currentColor" 
                            height="16" 
                            viewBox="0 0 24 24" 
                            width="16">
                            <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/>
                            <path d="M13.12 2.06L7.58 7.6c-.37.37-.58.88-.58 1.41V19c0 1.1.9 2 2 2h9c.8 0 1.52-.48 1.84-1.21l3.26-7.61C23.94 10.2 22.49 8 20.34 8h-5.65l.95-4.58c.1-.5-.05-1.01-.41-1.37-.59-.58-1.53-.58-2.11.01zM3 21c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2s-2 .9-2 2v8c0 1.1.9 2 2 2z"/>
                        </svg>
                        {popularPost.likesCount}
                    </div>
                </a>
            {/each}
        </div>
        </div>
    </div>
</div>

<style>
	.popular-posts-container { 
        display: flex;
        flex-direction: column;
        gap: 0.5rem; 
    }

	.post-likes { 
		display: flex; 
		gap: 0.25rem; 
	}

    .post-name { 
        -webkit-line-clamp: 2;
        display: -webkit-box;
        overflow: hidden;
        word-break: break-word;
        -webkit-box-orient: vertical;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.5;
    }

    .post-popular-li:hover { 
        color: #2b85df;
    }

    .post-popular-li { 
        border-bottom: 1px solid #414141;
        margin-bottom: 8px;
        color: white; 
        gap: 0.8rem;
        align-items: center; 
        display: flex;
        justify-content: space-between;
    }

    .popular-posts { 
        display: flex;
        flex-direction: column;
        gap: 0.75rem; 
        padding: 16px 12px; 
        background-color: var(--bg-paper);
        border-radius: 8px;
        
    }

    .popular-tag { 
        padding: 18px 12px; 
        display: flex;
        flex-direction: column;
        gap: 0.85rem;
        background-color: var(--bg-paper);
        border-radius: 12px; 
    }

    .forum-page h3 { 
        color: #fff; 
    }

    .forum-right-bar { 
        display: flex; 
        flex-direction: column;
        gap: 0.75rem; 
    }
    


    .forum-create-post { 
        background: var(--primary);
        color: var(--text-on-primary);
        padding: 14px 32px;
        border-radius: 10px;
        display: flex;
        font-size: 13px;
        align-items: center;
        justify-content: center;
    }

    .forum-create-post:hover { 
        background-color: #2b85df;
    }

	.forum-page { 
        width: 100%;
        padding: 12px; 
        padding-right: 20px;
        display: flex;
        gap: 1.75rem; 
    }
</style>
