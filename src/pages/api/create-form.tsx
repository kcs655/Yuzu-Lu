import React, { useState, ChangeEvent, FormEvent } from 'react';
import { createPost } from '../../app/lib/register-textbook'; // 適切なパスに変更してください

export default function PostsCreateForm() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    subject: '',
    grade: '',
    details: '',
    email: '',
    image: null as File | null
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFormData(prevState => ({
        ...prevState,
        image: e.target.files?.[0] ?? null
      }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (formData.image) {
      const postFormData = new FormData();
      postFormData.append('title', formData.title);
      postFormData.append('author', formData.author);
      postFormData.append('subject', formData.subject);
      postFormData.append('grade', formData.grade);
      postFormData.append('details', formData.details);
      postFormData.append('email', formData.email);
      postFormData.append('image', formData.image);

      try {
        const response = await createPost(postFormData);
        console.log('Post created successfully:', response);
      } catch (error) {
        console.error('Error creating post:', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 bg-white p-4">
      <label className="mb-2 block text-sm font-medium text-gray-700">
        タイトル
      </label>
      <input
        type="text"
        className="w-full rounded bg-gray-100 p-2"
        name="title"
        onChange={handleChange}
        required
      />
      <label className="mb-2 block text-sm font-medium text-gray-700">
        著者
      </label>
      <input
        type="text"
        className="w-full rounded bg-gray-100 p-2"
        name="author"
        onChange={handleChange}
        required
      />
      <label className="mb-2 block text-sm font-medium text-gray-700">
        科目
      </label>
      <input
        type="text"
        className="w-full rounded bg-gray-100 p-2"
        name="subject"
        onChange={handleChange}
        required
      />
      <label className="mb-2 block text-sm font-medium text-gray-700">
        学年
      </label>
      <input
        type="text"
        className="w-full rounded bg-gray-100 p-2"
        name="grade"
        onChange={handleChange}
        required
      />
      <label className="mb-2 block text-sm font-medium text-gray-700">
        詳細
      </label>
      <textarea
        className="w-full rounded border border-gray-300 p-2.5 focus:border-blue-500 focus:ring-blue-500"
        name="details"
        rows={4}
        onChange={handleChange}
        required
      ></textarea>
    
      <label className="mb-2 block text-sm font-medium text-gray-700">
        画像
      </label>
      <input
        type="file"
        className="w-full rounded bg-gray-100 font-medium text-gray-500 file:mr-4 file:border-0 file:bg-gray-800 file:px-4 file:py-2.5 file:text-white"
        name="image"
        onChange={handleImageChange}
        required
      />
      <button
        type="submit"
        className="mt-4 inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900"
      >
        公開
      </button>
    </form>
  );
}
