const Subscription = {
    
    userUpdated: {
      subscribe: (parent, args, {pubSub}) => {
        return pubSub.asyncIterator("USER_UPDATED");
      }
    }
};
  
export default Subscription;
  