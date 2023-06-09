import 'styles/global.module.scss';
import { PostsList } from 'features/posts/PostsList';
import { AddPostForm } from 'features/posts/AddPostForm';
import { Layout } from 'components/Layout';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SinglePostPage } from 'features/posts/SinglePostPage';
import { EditPostForm } from 'features/posts/EditPostForm';
import { UsersList } from 'features/users/UsersList';
import { UserPage } from 'features/users/UserPage';

export const App = () => {
    return (
        <Routes>
            <Route path="/blog-app-redux" element={<Layout />}>
                <Route index element={<PostsList />} />
                <Route path="post">
                    <Route index element={<AddPostForm />} />
                    <Route path=":postId" element={<SinglePostPage />} />
                    <Route path="edit/:postId" element={<EditPostForm />} />
                </Route>
                <Route path="user">
                    <Route index element={<UsersList />} />
                    <Route path=":userId" element={<UserPage />} />
                </Route>

                {/*Catch all*/}
                <Route path="*" element={<Navigate to="/blog-app-redux" replace />} />
            </Route>
        </Routes>
    );
};
