"use client"
import { useState } from 'react';

export default function CommentSection() {
    const [comment, setComment] = useState(""); // comment state holds a string
    const [comments, setComments] = useState<string[]>([]); // comments state is an array of strings

    const handleAddComment = () => {
        if (comment.trim()) {
            setComments([...comments, comment]); // add new comment
            setComment(""); // clear input field after adding comment
        }
    };

    const handleDeleteComment = (index: number) => {
        const newComments = comments.filter((_, i) => i !== index); // remove comment at given index
        setComments(newComments); // update the state with the new array
    };

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
            <div className="max-w-7xl mx-auto text-center text-black">
                <h2 className="text-4xl font-extrabold mb-10">
                    Comment Section
                </h2>
                <div className="mb-6">
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Add a comment..."
                        rows={4}
                        className="w-full p-4 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                    <button
                        onClick={handleAddComment}
                        className="mt-4 bg-gray-600 text-white px-6 py-2 rounded-full hover:bg-gray-500"
                    >
                        Post Comment
                    </button>
                </div>

                <div className="space-y-4">
                    {comments.length > 0 ? (
                        comments.map((comment, index) => (
                            <div key={index} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
                                <p className="text-gray-800">{comment}</p>
                                <button
                                    onClick={() => handleDeleteComment(index)}
                                    className="text-red-600 hover:underline"
                                >
                                    Delete
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No comments yet.</p>
                    )}
                </div>
            </div>
        </section>
    );
}
