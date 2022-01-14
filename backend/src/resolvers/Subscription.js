<<<<<<< HEAD
const Subscription = {
  postCreated: {
    subscribe: (parent, args, { pubSub }) => {
      return pubSub.asyncIterator("POST_CREATED");
    },
  },
  postUpdated: {
    subscribe: (parent, args, { pubSub }) => {
      return pubSub.asyncIterator("POST_UPDATED");
    },
  },
};

export default Subscription;
=======
const Subscription = {
  postCreated: {
    subscribe: (parent, args, { pubSub }) => {
      return pubSub.asyncIterator("POST_CREATED");
    },
  },
  postUpdated: {
    subscribe: (parent, args, { pubSub }) => {
      return pubSub.asyncIterator("POST_UPDATED");
    },
  },
};

export default Subscription;
>>>>>>> origin/master
  