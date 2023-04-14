using Streamish.Models;
using System;
using System.Collections.Generic;

namespace Streamish.Repositories
{
    public interface IVideoRepository
    {
        void Add(Video video);
        void Delete(int id);
        List<Video> GetAll();
        List<Video> Hottest(DateTime since);
        List<Video> GetAllWithComments();
        List<Video> Search(string criterion, bool sortDescending);
        Video GetVideoByIdWithComments(int id);
        Video GetById(int id);
        void Update(Video video);
    }
}