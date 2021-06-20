import {BlogPost} from '../mock-data/blog-06-19-21';
import {of} from 'rxjs';

export class MasterService {
  getBlogPosts() {
    return of(BlogPost);
  }
}
