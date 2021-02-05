const signs = [
  {
    URL: './images/A_lot.gif',
    name: 'A lot',
    handshape: 'Bent 5',
    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: 'Bent 5',
  },
  {
    URL: './images/Abandon.gif',
    name: 'Abandon',
    handshape: 'S',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: 'S',
  },
  {
    URL: './images/Abortion.gif',
    name: 'Abortion',
    handshape: 'Open B',

    hands: 'Two-handed, asymmetrical',
    movement: 'Non-Repeated',
    location: 'palm',
    handshape: 'Open B',
  },
  {
    URL: './images/Addicted.gif',
    name: 'Addicted',
    handshape: 'X',

    hands: 'One-handed, moving',
    movement: 'Non-Repeated',
    location: 'face',
    handshape: 'X',
  },
  {
    URL: './images/Advise.gif',
    name: 'Advise',
    handshape: 'Open B',

    hands: 'Two-handed, asymmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: 'Open B',
  },
  {
    URL: './images/Africa.gif',
    name: 'Africa',
    handshape: '5',

    hands: 'One-handed, moving',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: '5',
  },
  {
    URL: './images/Alcohol.gif',
    name: 'Alcohol',
    handshape: '1L',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: '1L',
  },
  {
    URL: './images/All_night.gif',
    name: 'All night',
    handshape: 'B',

    hands: 'Two-handed, asymmetrical',
    movement: 'Non-Repeated',
    location: 'arm',
    handshape: 'B',
  },
  {
    URL: './images/Alone.gif',
    name: 'Alone',
    handshape: '1',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'In space',
    handshape: '1',
  },
  {
    URL: './images/Announce.gif',
    name: 'Announce',
    handshape: '1',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'face',
    handshape: '1',
  },
  {
    URL: './images/Answer.gif',
    name: 'Answer',
    handshape: '1',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'face',
    handshape: '1',
  },
  {
    URL: './images/Applause.gif',
    name: 'Applause',
    handshape: 'Open B',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'palm',
    handshape: 'Open B',
  },
  {
    URL: './images/Apple.gif',
    name: 'Apple',
    handshape: 'Baby O',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'face',
    handshape: 'Baby O',
  },
  {
    URL: './images/Appointment.gif',
    name: 'Appointment',
    handshape: 'S',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'hand',
    handshape: 'S',
  },
  {
    URL: './images/Association.gif',
    name: 'Association',
    handshape: 'Open A',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'hand',
    handshape: 'Open A',
  },
  {
    URL: './images/Australia.gif',
    name: 'Australia',
    handshape: '8',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'torso',
    handshape: '8',
  },
  {
    URL: './images/Authority.gif',
    name: 'Authority',
    handshape: 'Open A',

    hands: 'Two-handed, asymmetrical',
    movement: 'Non-Repeated',
    location: 'arm',
    handshape: 'Open A',
  },
  {
    URL: './images/Awful.gif',
    name: 'Awful',
    handshape: '8',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'face',
    handshape: '8',
  },
  {
    URL: './images/Bad.gif',
    name: 'Bad',
    handshape: 'Open B',

    hands: 'One-handed, moving',
    movement: 'Non-Repeated',
    location: 'face',
    handshape: 'Open B',
  },
  {
    URL: './images/Ball.gif',
    name: 'Ball',
    handshape: 'Bent 5',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'face',
    handshape: 'Bent 5',
  },
  {
    URL: './images/Balloon.gif',
    name: 'Balloon',
    handshape: 'Bent 5',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'face',
    handshape: 'Bent 5',
  },
  {
    URL: './images/Beard.gif',
    name: 'Beard',
    handshape: 'Bent 5',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'face',
    handshape: 'Bent 5',
  },
  {
    URL: './images/Beautiful.gif',
    name: 'Beautiful',
    handshape: '5',

    hands: 'One-handed, moving',
    movement: 'Non-Repeated',
    location: 'face',
    handshape: '5',
  },
  {
    URL: './images/Become.gif',
    name: 'Become',
    handshape: 'Open B',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'palm',
    handshape: 'Open B',
  },
  {
    URL: './images/Bee.gif',
    name: 'Bee',
    handshape: 'F',

    hands: 'One-handed, moving',
    movement: 'Non-Repeated',
    location: 'face',
    handshape: 'F',
  },
  {
    URL: './images/Book.gif',
    name: 'Book',
    handshape: 'Open B',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'palm',
    handshape: 'Open B',
  },
  {
    URL: './images/Boy.gif',
    name: 'Boy',
    handshape: 'Flattened O',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'headside',
    handshape: 'Flattened O',
  },
  {
    URL: './images/Bread.gif',
    name: 'Bread',
    handshape: 'Bent B',

    hands: 'Two-handed, asymmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: 'Bent B',
  },
  {
    URL: './images/Breathe.gif',
    name: 'Breathe',
    handshape: '5',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'torso',
    handshape: '5',
  },
  {
    URL: './images/Bridge.gif',
    name: 'Bridge',
    handshape: 'V',

    hands: 'Two-handed, asymmetrical',
    movement: 'Repeated',
    location: 'arm',
    handshape: 'V',
  },
  {
    URL: './images/Business.gif',
    name: 'Business',
    handshape: 'Open B',

    hands: 'Two-handed, asymmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: 'Open B',
  },
  {
    URL: './images/But.gif',
    name: 'But',
    handshape: '1',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'hand',
    handshape: '1',
  },
  {
    URL: './images/Cafeteria.gif',
    name: 'Cafeteria',
    handshape: 'C',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'face',
    handshape: 'C',
  },
  {
    URL: './images/Cat.gif',
    name: 'Cat',
    handshape: 'F',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'headside',
    handshape: 'F',
  },
  {
    URL: './images/Cereal.gif',
    name: 'Cereal',
    handshape: 'Open B',

    hands: 'Two-handed, asymmetrical',
    movement: 'Repeated',
    location: 'torso',
    handshape: 'Open B',
  },
  {
    URL: './images/Character.gif',
    name: 'Character',
    handshape: 'C',

    hands: 'One-handed, moving',
    movement: 'Non-Repeated',
    location: 'torso',
    handshape: 'C',
  },
  {
    URL: './images/Checkers.gif',
    name: 'Checkers',
    handshape: 'C',

    hands: 'One-handed, moving',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: 'C',
  },
  {
    URL: './images/Checking-account.gif',
    name: 'Checking account',
    handshape: 'Bent L',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: 'Bent L',
  },
  {
    URL: './images/Chicago.gif',
    name: 'Chicago',
    handshape: 'C',

    hands: 'One-handed, moving',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: 'C',
  },
  {
    URL: './images/Choke.gif',
    name: 'Choke',
    handshape: 'C',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: 'C',
  },
  {
    URL: './images/Christmas.gif',
    name: 'Christmas',
    handshape: 'C',

    hands: 'One-handed, moving',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: 'C',
  },
  {
    URL: './images/Cigarette.gif',
    name: 'Cigarette',
    handshape: '1L',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: '1L',
  },
  {
    URL: './images/Close_window.gif',
    name: 'Close window',
    handshape: 'Open B',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: 'Open B',
  },
  {
    URL: './images/Close.gif',
    name: 'Close',
    handshape: 'B ',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'face',
    handshape: 'B ',
  },
  {
    URL: './images/Coffee.gif',
    name: 'Coffee',
    handshape: 'S',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: 'S',
  },
  {
    URL: './images/Coins.gif',
    name: 'Coins',
    handshape: 'F',

    hands: 'Two-handed, asymmetrical',
    movement: 'Repeated',
    location: 'palm',
    handshape: 'F',
  },
  {
    URL: './images/Collect.gif',
    name: 'Collect',
    handshape: 'Bent 5',

    hands: 'Two-handed, asymmetrical',
    movement: 'Repeated',
    location: 'palm',
    handshape: 'Bent 5',
  },
  {
    URL: './images/Color.gif',
    name: 'Color',
    handshape: '5',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'face',
    handshape: '5',
  },
  {
    URL: './images/Computer.gif',
    name: 'Computer',
    handshape: 'C',

    hands: 'Two-handed, asymmetrical',
    movement: 'Repeated',
    location: 'arm',
    handshape: 'C',
  },
  {
    URL: './images/Conflict.gif',
    name: 'Conflict',
    handshape: '1',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'hand',
    handshape: '1',
  },
  {
    URL: './images/Contact.gif',
    name: 'Contact',
    handshape: 'Open 8',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: 'Open 8',
  },
  {
    URL: './images/Cook.gif',
    name: 'Cook',
    handshape: 'Open B',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'hand',
    handshape: 'Open B',
  },
  {
    URL: './images/Cooking.gif',
    name: 'Cooking',
    handshape: 'Open B',

    hands: 'Two-handed, asymmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: 'Open B',
  },
  {
    URL: './images/Cooperate.gif',
    name: 'Cooperate',
    handshape: 'F',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: 'F',
  },
  {
    URL: './images/Country.gif',
    name: 'Country',
    handshape: 'Open B',

    hands: 'Two-handed, asymmetrical',
    movement: 'Repeated',
    location: 'arm',
    handshape: 'Open B',
  },
  {
    URL: './images/Cousin.gif',
    name: 'Cousin',
    handshape: 'C',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'headside',
    handshape: 'C',
  },
  {
    URL: './images/Cow.gif',
    name: 'Cow',
    handshape: 'Y',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'headside',
    handshape: 'Y',
  },
  {
    URL: './images/Crazy.gif',
    name: 'Crazy',
    handshape: '1',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'headside',
    handshape: '1',
  },
  {
    URL: './images/Cry.gif',
    name: 'Cry',
    handshape: '1',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'face',
    handshape: '1',
  },
  {
    URL: './images/Curly.gif',
    name: 'Curly',
    handshape: 'Bent 5',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'headside',
    handshape: 'Bent 5',
  },
  {
    URL: './images/Dance.gif',
    name: 'Dance',
    handshape: 'V',

    hands: 'Two-handed, asymmetrical',
    movement: 'Repeated',
    location: 'palm',
    handshape: 'V',
  },
  {
    URL: './images/Dim.gif',
    name: 'Dim',
    handshape: '5',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: '5',
  },
  {
    URL: './images/Dirty.gif',
    name: 'Dirty',
    handshape: '5',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'face',
    handshape: '5',
  },
  {
    URL: './images/Disappear.gif',
    name: 'Disappear',
    handshape: '1',

    hands: 'Two-handed, asymmetrical',
    movement: 'Non-Repeated',
    location: 'hand',
    handshape: '1',
  },
  {
    URL: './images/Distribute.gif',
    name: 'Distribute',
    handshape: 'Flattened O',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'torso',
    handshape: 'Flattened O',
  },
  {
    URL: './images/Drink.gif',
    name: 'Drink',
    handshape: 'C',

    hands: 'One-handed, moving',
    movement: 'Non-Repeated',
    location: 'face',
    handshape: 'C',
  },
  {
    URL: './images/Drunk.gif',
    name: 'Drunk',
    handshape: 'Open A',

    hands: 'One-handed, moving',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: 'Open A',
  },
  {
    URL: './images/During.gif',
    name: 'During',
    handshape: '1',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: '1',
  },
  {
    URL: './images/Dye.gif',
    name: 'Dye',
    handshape: 'F',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'In space',
    handshape: 'F',
  },
  {
    URL: './images/Earth.gif',
    name: 'Earth',
    handshape: 'Open 8',

    hands: 'Two-handed, asymmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: 'Open 8',
  },
  {
    URL: './images/Eat.gif',
    name: 'Eat',
    handshape: 'Flattened O',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'face',
    handshape: 'Flattened O',
  },
  {
    URL: './images/Egypt.gif',
    name: 'Egypt',
    handshape: 'X',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'face',
    handshape: 'X',
  },
  {
    URL: './images/Either.gif',
    name: 'Either',
    handshape: 'V',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: 'V',
  },
  {
    URL: './images/E-mail.gif',
    name: 'E-mail',
    handshape: 'E',

    hands: 'Two-handed, asymmetrical',
    movement: 'Non-Repeated',
    location: 'hand',
    handshape: 'E',
  },
  {
    URL: './images/Empty.gif',
    name: 'Empty',
    handshape: 'Open 8',

    hands: 'Two-handed, asymmetrical',
    movement: 'Non-Repeated',
    location: 'hand',
    handshape: 'Open 8',
  },
  {
    URL: './images/Encyclopedia.gif',
    name: 'Encyclopedia',
    handshape: 'E',

    hands: 'Two-handed, asymmetrical',
    movement: 'Repeated',
    location: 'palm',
    handshape: 'E',
  },
  {
    URL: './images/Episcopal.gif',
    name: 'Episcopal',
    handshape: '1',

    hands: 'Two-handed, asymmetrical',
    movement: 'Non-Repeated',
    location: 'arm',
    handshape: '1',
  },
  {
    URL: './images/Everyday.gif',
    name: 'Everyday',
    handshape: 'Open A',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'headside',
    handshape: 'Open A',
  },
  {
    URL: './images/Excited.gif',
    name: 'Excited',
    handshape: 'Open 8',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'torso',
    handshape: 'Open 8',
  },
  {
    URL: './images/Experience.gif',
    name: 'Experience',
    handshape: 'Flattened O',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'headside',
    handshape: 'Flattened O',
  },
  {
    URL: './images/Express.gif',
    name: 'Express',
    handshape: 'A',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'torso',
    handshape: 'A',
  },
  {
    URL: './images/Family.gif',
    name: 'Family',
    handshape: 'F ',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: 'F ',
  },
  {
    URL: './images/Famous.gif',
    name: 'Famous',
    handshape: '1',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'face',
    handshape: '1',
  },
  {
    URL: './images/Fancy.gif',
    name: 'Fancy',
    handshape: '5',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'torso',
    handshape: '5',
  },
  {
    URL: './images/Farm.gif',
    name: 'Farm',
    handshape: '5',

    hands: 'One-handed, moving',
    movement: 'Non-Repeated',
    location: 'face',
    handshape: '5',
  },
  {
    URL: './images/Feedback.gif',
    name: 'Feedback',
    handshape: '8',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: '8',
  },
  {
    URL: './images/Fight.gif',
    name: 'Fight',
    handshape: 'S',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: 'S',
  },
  {
    URL: './images/Finally.gif',
    name: 'Finally',
    handshape: '1',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'face',
    handshape: '1',
  },
  {
    URL: './images/Fine.gif',
    name: 'Fine',
    handshape: '5',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'torso',
    handshape: '5',
  },
  {
    URL: './images/Fingerspell.gif',
    name: 'Fingerspell',
    handshape: 'Bent 5',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'In space',
    handshape: 'Bent 5',
  },
  {
    URL: './images/Flashlight.gif',
    name: 'Flashlight',
    handshape: 'Bent L',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'In space',
    handshape: 'Bent L',
  },
  {
    URL: './images/Flat.gif',
    name: 'Flat',
    handshape: 'Bent B',

    hands: 'Two-handed, asymmetrical',
    movement: 'Non-Repeated',
    location: 'hand',
    handshape: 'Bent B',
  },
  {
    URL: './images/Focus.gif',
    name: 'Focus',
    handshape: 'Open B',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: 'Open B',
  },
  {
    URL: './images/Football.gif',
    name: 'Football',
    handshape: '5',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'In space',
    handshape: '5',
  },
  {
    URL: './images/Force.gif',
    name: 'Force',
    handshape: 'C',

    hands: 'Two-handed, asymmetrical',
    movement: 'Non-Repeated',
    location: 'hand',
    handshape: 'C',
  },
  {
    URL: './images/Foreign.gif',
    name: 'Foreign',
    handshape: 'F',

    hands: 'Two-handed, asymmetrical',
    movement: 'Repeated',
    location: 'arm',
    handshape: 'F',
  },
  {
    URL: './images/Fork.gif',
    name: 'Fork',
    handshape: 'V',

    hands: 'Two-handed, asymmetrical',
    movement: 'Non-Repeated',
    location: 'palm',
    handshape: 'V',
  },
  {
    URL: './images/Formerly.gif',
    name: 'Formerly',
    handshape: 'Bent 5',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'torso',
    handshape: 'Bent 5',
  },
  {
    URL: './images/Free.gif',
    name: 'Free',
    handshape: 'F',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: 'F',
  },
  {
    URL: './images/Freeze.gif',
    name: 'Freeze',
    handshape: '5',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: '5',
  },
  {
    URL: './images/Friendly.gif',
    name: 'Friendly',
    handshape: '5',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: '5',
  },
  {
    URL: './images/From-now-on.gif',
    name: 'From now on',
    handshape: 'Open B',

    hands: 'Two-handed, asymmetrical',
    movement: 'Non-Repeated',
    location: 'hand',
    handshape: 'Open B',
  },
  {
    URL: './images/Funeral.gif',
    name: 'Funeral',
    handshape: 'V',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: 'V',
  },
  {
    URL: './images/General.gif',
    name: 'General',
    handshape: 'Open B',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: 'Open B',
  },
  {
    URL: './images/Get.gif',
    name: 'Get',
    handshape: '5',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: '5',
  },
  {
    URL: './images/Giraffe.gif',
    name: 'Giraffe',
    handshape: 'C',

    hands: 'One-handed, moving',
    movement: 'Non-Repeated',
    location: 'torso',
    handshape: 'C',
  },
  {
    URL: './images/Girl.gif',
    name: 'Girl',
    handshape: 'Open A',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'headside',
    handshape: 'Open A',
  },
  {
    URL: './images/Glasses.gif',
    name: 'Glasses',
    handshape: 'Bent L',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'headside',
    handshape: 'Bent L',
  },
  {
    URL: './images/Globe.gif',
    name: 'Globe',
    handshape: 'Bent 5',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: 'Bent 5',
  },
  {
    URL: './images/Go.gif',
    name: 'Go',
    handshape: '1',

    hands: 'One-handed, moving',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: '1',
  },
  {
    URL: './images/Good.gif',
    name: 'Good',
    handshape: 'Open B',

    hands: 'One-handed, moving',
    movement: 'Non-Repeated',
    location: 'face',
    handshape: 'Open B',
  },
  {
    URL: './images/Good_luck.gif',
    name: 'Good luck',
    handshape: '5',

    hands: 'One-handed, moving',
    movement: 'Non-Repeated',
    location: 'face',
    handshape: '5',
  },
  {
    URL: './images/Grammar.gif',
    name: 'Grammar',
    handshape: 'G',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'In space',
    handshape: 'G',
  },
  {
    URL: './images/Grandfather.gif',
    name: 'Grandfather',
    handshape: '5',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'face',
    handshape: '5',
  },
  {
    URL: './images/Grandmother.gif',
    name: 'Grandmother',
    handshape: '5',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'face',
    handshape: '5',
  },
  {
    URL: './images/Greece.gif',
    name: 'Greece',
    handshape: '1',

    hands: 'Two-handed, asymmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: '1',
  },
  {
    URL: './images/Hair.gif',
    name: 'Hair',
    handshape: 'F',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'headside',
    handshape: 'F',
  },
  {
    URL: './images/Happen.gif',
    name: 'Happen',
    handshape: '1',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: '1',
  },
  {
    URL: './images/Hard.gif',
    name: 'Hard',
    handshape: 'Bent V',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'hand',
    handshape: 'Bent V',
  },
  {
    URL: './images/Hate.gif',
    name: 'Hate',
    handshape: '8',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: '8',
  },
  {
    URL: './images/Headache.gif',
    name: 'Headache',
    handshape: '1',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'face',
    handshape: '1',
  },
  {
    URL: './images/Hurricane.gif',
    name: 'Hurricane',
    handshape: 'Open N',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: 'Open N',
  },
  {
    URL: './images/Hurt.gif',
    name: 'Hurt',
    handshape: '1',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'In space',
    handshape: '1',
  },
  {
    URL: './images/Ignition_off.gif',
    name: 'Ignition off',
    handshape: 'Baby O',

    hands: 'One-handed, moving',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: 'Baby O',
  },
  {
    URL: './images/Ignore.gif',
    name: 'Ignore',
    handshape: '4',

    hands: 'One-handed, moving',
    movement: 'Non-Repeated',
    location: 'face',
    handshape: '4',
  },
  {
    URL: './images/Important.gif',
    name: 'Important',
    handshape: 'F',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: 'F',
  },
  {
    URL: './images/Impossible.gif',
    name: 'Impossible',
    handshape: 'Y',

    hands: 'Two-handed, asymmetrical',
    movement: 'Repeated',
    location: 'palm',
    handshape: 'Y',
  },
  {
    URL: './images/Include.gif',
    name: 'Include',
    handshape: '5',

    hands: 'Two-handed, asymmetrical',
    movement: 'Non-Repeated',
    location: 'hand',
    handshape: '5',
  },
  {
    URL: './images/Intercourse.gif',
    name: 'Intercourse',
    handshape: 'V',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'palm',
    handshape: 'V',
  },
  {
    URL: './images/Internet.gif',
    name: 'Internet',
    handshape: 'Open 8',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: 'Open 8',
  },
  {
    URL: './images/Interpret.gif',
    name: 'Interpret',
    handshape: 'F',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: 'F',
  },
  {
    URL: './images/Introduce.gif',
    name: 'Introduce',
    handshape: 'Open B',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: 'Open B',
  },
  {
    URL: './images/Island.gif',
    name: 'Island',
    handshape: 'I',

    hands: 'Two-handed, asymmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: 'I',
  },
  {
    URL: './images/Jesus.gif',
    name: 'Jesus',
    handshape: 'Open 8',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'palm',
    handshape: 'Open 8',
  },
  {
    URL: './images/Jewish.gif',
    name: 'Jewish',
    handshape: 'Bent B',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'face',
    handshape: 'Bent B',
  },
  {
    URL: './images/Kid.gif',
    name: 'Kid',
    handshape: '1L',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'face',
    handshape: '1L',
  },
  {
    URL: './images/Kiss.gif',
    name: 'Kiss',
    handshape: 'Flattened O',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: 'Flattened O',
  },
  {
    URL: './images/Kitchen.gif',
    name: 'Kitchen',
    handshape: 'K',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'palm',
    handshape: 'K',
  },
  {
    URL: './images/Know.gif',
    name: 'Know',
    handshape: 'Bent B',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'headside',
    handshape: 'Bent B',
  },
  {
    URL: './images/Laugh.gif',
    name: 'Laugh',
    handshape: 'Bent L',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'face',
    handshape: 'Bent L',
  },
  {
    URL: './images/Learn.gif',
    name: 'Learn',
    handshape: '5',

    hands: 'Two-handed, asymmetrical',
    movement: 'Non-Repeated',
    location: 'palm',
    handshape: '5',
  },
  {
    URL: './images/Light-match.gif',
    name: 'Light match',
    handshape: 'Baby O',

    hands: 'Two-handed, asymmetrical',
    movement: 'Non-Repeated',
    location: 'palm',
    handshape: 'Baby O',
  },
  {
    URL: './images/Line.gif',
    name: 'Line',
    handshape: 'I',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'hand',
    handshape: 'I',
  },
  {
    URL: './images/Look.gif',
    name: 'Look',
    handshape: 'V',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'face',
    handshape: 'V',
  },
  {
    URL: './images/Lose-weight.gif',
    name: 'Lose weight',
    handshape: 'Bent L',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'torso',
    handshape: 'Bent L',
  },
  {
    URL: './images/Make.gif',
    name: 'Make',
    handshape: 'S',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'hand',
    handshape: 'S',
  },
  {
    URL: './images/Marry.gif',
    name: 'Marry',
    handshape: 'Bent B',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: 'Bent B',
  },
  {
    URL: './images/Match.gif',
    name: 'Match',
    handshape: 'Bent 5',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: 'Bent 5',
  },
  {
    URL: './images/Melon.gif',
    name: 'Melon',
    handshape: '8',

    hands: 'Two-handed, asymmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: '8',
  },
  {
    URL: './images/Member.gif',
    name: 'Member',
    handshape: 'Flattened O',

    hands: 'One-handed, moving',
    movement: 'Non-Repeated',
    location: 'torso',
    handshape: 'Flattened O',
  },
  {
    URL: './images/Merge.gif',
    name: 'Merge',
    handshape: '5',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: '5',
  },
  {
    URL: './images/Messed-up.gif',
    name: 'Messed-up',
    handshape: 'Bent 5',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: 'Bent 5',
  },
  {
    URL: './images/Milk.gif',
    name: 'Milk',
    handshape: 'S',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'In space',
    handshape: 'S',
  },
  {
    URL: './images/Misunderstand.gif',
    name: 'Misunderstand',
    handshape: 'V',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'face',
    handshape: 'V',
  },
  {
    URL: './images/Mix-up.gif',
    name: 'Mix-up',
    handshape: 'Bent 5',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'In space',
    handshape: 'Bent 5',
  },
  {
    URL: './images/More.gif',
    name: 'More',
    handshape: 'Flattened O',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: 'Flattened O',
  },
  {
    URL: './images/Mosquito.gif',
    name: 'Mosquito',
    handshape: 'Open 8',

    hands: 'One-handed, moving',
    movement: 'Non-Repeated',
    location: 'face',
    handshape: 'Open 8',
  },
  {
    URL: './images/Mustache.gif',
    name: 'Mustache',
    handshape: 'G',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'face',
    handshape: 'G',
  },
  {
    URL: './images/Nervous.gif',
    name: 'Nervous',
    handshape: '5',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'In space',
    handshape: '5',
  },
  {
    URL: './images/Nigeria.gif',
    name: 'Nigeria',
    handshape: 'N',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'face',
    handshape: 'N',
  },
  {
    URL: './images/None.gif',
    name: 'None',
    handshape: 'O',

    hands: 'One-handed, moving',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: 'O',
  },
  {
    URL: './images/Nose.gif',
    name: 'Nose',
    handshape: '1',

    hands: 'One-handed, moving',
    movement: 'Non-Repeated',
    location: 'face',
    handshape: '1',
  },
  {
    URL: './images/Octopus.gif',
    name: 'Octopus',
    handshape: 'Flattened O',

    hands: 'Two-handed, asymmetrical',
    movement: 'Repeated',
    location: 'In space',
    handshape: 'Flattened O',
  },
  {
    URL: './images/Old.gif',
    name: 'Old',
    handshape: 'O',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'face',
    handshape: 'O',
  },
  {
    URL: './images/Olympics.gif',
    name: 'Olympics',
    handshape: 'F ',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: 'F ',
  },
  {
    URL: './images/Orange.gif',
    name: 'Orange',
    handshape: 'S',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'face',
    handshape: 'S',
  },
  {
    URL: './images/Orthodox.gif',
    name: 'Orthodox',
    handshape: 'F',

    hands: 'Two-handed, asymmetrical',
    movement: 'Non-Repeated',
    location: 'palm',
    handshape: 'F',
  },
  {
    URL: './images/Owl.gif',
    name: 'Owl',
    handshape: 'O',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'face',
    handshape: 'O',
  },
  {
    URL: './images/Pancake.gif',
    name: 'Pancake',
    handshape: 'Open B',

    hands: 'Two-handed, asymmetrical',
    movement: 'Non-Repeated',
    location: 'palm',
    handshape: 'Open B',
  },
  {
    URL: './images/Paper.gif',
    name: 'Paper',
    handshape: '5',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'palm',
    handshape: '5',
  },
  {
    URL: './images/Parallel.gif',
    name: 'Parallel',
    handshape: '1',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: '1',
  },
  {
    URL: './images/Pay-attention.gif',
    name: 'Pay attention',
    handshape: 'Open B',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'headside',
    handshape: 'Open B',
  },
  {
    URL: './images/Pea-brain.gif',
    name: 'Pea brain',
    handshape: 'G',

    hands: 'One-handed, moving',
    movement: 'Non-Repeated',
    location: 'headside',
    handshape: 'G',
  },
  {
    URL: './images/Penis.gif',
    name: 'Penis',
    handshape: 'K',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'face',
    handshape: 'K',
  },
  {
    URL: './images/People_audience.gif',
    name: 'People audience',
    handshape: 'K',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: 'K',
  },
  {
    URL: './images/Picture.gif',
    name: 'Picture',
    handshape: 'C',

    hands: 'Two-handed, asymmetrical',
    movement: 'Non-Repeated',
    location: 'face',
    handshape: 'C',
  },
  {
    URL: './images/Pig.gif',
    name: 'Pig',
    handshape: 'Bent B',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'face',
    handshape: 'Bent B',
  },
  {
    URL: './images/Pillow.gif',
    name: 'Pillow',
    handshape: 'Bent 5',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'headside',
    handshape: 'Bent 5',
  },
  {
    URL: './images/Play_around.gif',
    name: 'Play around',
    handshape: 'Y',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: 'Y',
  },
  {
    URL: './images/Play.gif',
    name: 'Play',
    handshape: 'Y',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'In space',
    handshape: 'Y',
  },
  {
    URL: './images/Polite.gif',
    name: 'Polite',
    handshape: '5',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'torso',
    handshape: '5',
  },
  {
    URL: './images/Poor.gif',
    name: 'Poor',
    handshape: 'Flattened O',

    hands: 'Two-handed, asymmetrical',
    movement: 'Repeated',
    location: 'arm',
    handshape: 'Flattened O',
  },
  {
    URL: './images/Postpone.gif',
    name: 'Postpone',
    handshape: 'F ',

    hands: 'Two-handed, asymmetrical',
    movement: 'Non-Repeated',
    location: 'hand',
    handshape: 'F ',
  },
  {
    URL: './images/Potato.gif',
    name: 'Potato',
    handshape: 'Bent V',

    hands: 'Two-handed, asymmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: 'Bent V',
  },
  {
    URL: './images/Predict.gif',
    name: 'Predict',
    handshape: 'V',

    hands: 'Two-handed, asymmetrical',
    movement: 'Non-Repeated',
    location: 'face',
    handshape: 'V',
  },
  {
    URL: './images/Pregnant.gif',
    name: 'Pregnant',
    handshape: '5',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'hand',
    handshape: '5',
  },
  {
    URL: './images/Priest.gif',
    name: 'Priest',
    handshape: 'G',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'torso',
    handshape: 'G',
  },
  {
    URL: './images/Puerto_Rico.gif',
    name: 'Puerto Rico',
    handshape: 'K',

    hands: 'Two-handed, asymmetrical',
    movement: 'Non-Repeated',
    location: 'hand',
    handshape: 'K',
  },
  {
    URL: './images/Puff-smoke.gif',
    name: 'Puff-smoke',
    handshape: 'O',

    hands: 'One-handed, moving',
    movement: 'Non-Repeated',
    location: 'face',
    handshape: 'O',
  },
  {
    URL: './images/Raccoon.gif',
    name: 'Raccoon',
    handshape: 'V',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'face',
    handshape: 'V',
  },
  {
    URL: './images/Race.gif',
    name: 'Race',
    handshape: 'Open A',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: 'Open A',
  },
  {
    URL: './images/Radio.gif',
    name: 'Radio',
    handshape: 'Bent 5',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'headside',
    handshape: 'Bent 5',
  },
  {
    URL: './images/Rainbow.gif',
    name: 'Rainbow',
    handshape: '4',

    hands: 'One-handed, moving',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: '4',
  },
  {
    URL: './images/Rat.gif',
    name: 'Rat',
    handshape: 'R',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'face',
    handshape: 'R',
  },
  {
    URL: './images/Read.gif',
    name: 'Read',
    handshape: 'V',

    hands: 'Two-handed, asymmetrical',
    movement: 'Repeated',
    location: 'palm',
    handshape: 'V',
  },
  {
    URL: './images/Really.gif',
    name: 'Really',
    handshape: '1',

    hands: 'One-handed, moving',
    movement: 'Non-Repeated',
    location: 'face',
    handshape: '1',
  },
  {
    URL: './images/Reduce.gif',
    name: 'Reduce',
    handshape: 'Flattened O',

    hands: 'Two-handed, asymmetrical',
    movement: 'Non-Repeated',
    location: 'hand',
    handshape: 'Flattened O',
  },
  {
    URL: './images/Replace.gif',
    name: 'Replace',
    handshape: 'Flattened O',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'In space',
    handshape: 'Flattened O',
  },
  {
    URL: './images/Responsibility.gif',
    name: 'Responsibility',
    handshape: 'Bent B',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'arm',
    handshape: 'Bent B',
  },
  {
    URL: './images/Ride.gif',
    name: 'Ride',
    handshape: 'Bent V',

    hands: 'Two-handed, asymmetrical',
    movement: 'Non-Repeated',
    location: 'hand',
    handshape: 'Bent V',
  },
  {
    URL: './images/Road.gif',
    name: 'Road',
    handshape: 'Bent V',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'In space',
  },
  {
    URL: './images/Roommate.gif',
    name: 'Roommate',
    handshape: 'Bent 5',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: 'Bent 5',
  },
  {
    URL: './images/Ruin.gif',
    name: 'Ruin',
    handshape: 'X',

    hands: 'Two-handed, asymmetrical',
    movement: 'Non-Repeated',
    location: 'hand',
    handshape: 'X',
  },
  {
    URL: './images/Salt.gif',
    name: 'Salt',
    handshape: 'V',

    hands: 'Two-handed, asymmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: 'V',
  },
  {
    URL: './images/San_Francisco.gif',
    name: 'San Francisco',
    handshape: 'S',

    hands: 'One-handed, moving',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: 'S',
  },
  {
    URL: './images/Sarcasm.gif',
    name: 'Sarcasm',
    handshape: '1L',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'face',
    handshape: '1L',
  },
  {
    URL: './images/Save-money.gif',
    name: 'Save money',
    handshape: 'Flattened O',

    hands: 'Two-handed, asymmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: 'Flattened O',
  },
  {
    URL: './images/School.gif',
    name: 'School',
    handshape: 'Open B',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'palm',
    handshape: 'Open B',
  },
  {
    URL: './images/Scotland.gif',
    name: 'Scotland',
    handshape: '4',

    hands: 'One-handed, moving',
    movement: 'Non-Repeated',
    location: 'arm',
    handshape: '4',
  },
  {
    URL: './images/Secret.gif',
    name: 'Secret',
    handshape: 'Open A',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'face',
    handshape: 'Open A',
  },
  {
    URL: './images/See_saw.gif',
    name: 'See saw',
    handshape: 'Bent V',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'In space',
    handshape: 'Bent V',
  },
  {
    URL: './images/Sentence.gif',
    name: 'Sentence',
    handshape: 'F',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: 'F',
  },
  {
    URL: './images/Sew.gif',
    name: 'Sew',
    handshape: 'F',

    hands: 'Two-handed, asymmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: 'F',
  },
  {
    URL: './images/Shave.gif',
    name: 'Shave',
    handshape: 'Y',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'face',
    handshape: 'Y',
  },
  {
    URL: './images/Shoes.gif',
    name: 'Shoes',
    handshape: 'S',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: 'S',
  },
  {
    URL: './images/Sick.gif',
    name: 'Sick',
    handshape: 'Open 8',

    hands: 'One-handed, moving',
    movement: 'Non-Repeated',
    location: 'face',
    handshape: 'Open 8',
  },
  {
    URL: './images/Silly.gif',
    name: 'Silly',
    handshape: 'Y',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'face',
    handshape: 'Y',
  },
  {
    URL: './images/Simple.gif',
    name: 'Simple',
    handshape: 'F',

    hands: 'Two-handed, asymmetrical',
    movement: 'Non-Repeated',
    location: 'hand',
    handshape: 'F',
  },
  {
    URL: './images/Sit.gif',
    name: 'Sit',
    handshape: 'H',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'hand',
    handshape: 'H',
  },
  {
    URL: './images/Smile.gif',
    name: 'Smile',
    handshape: 'Flattened O',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'face',
    handshape: 'Flattened O',
  },
  {
    URL: './images/Socks.gif',
    name: 'Socks',
    handshape: '1',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: '1',
  },
  {
    URL: './images/Speech.gif',
    name: 'Speech',
    handshape: 'Bent V',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'face',
    handshape: 'Bent V',
  },
  {
    URL: './images/Spread.gif',
    name: 'Spread',
    handshape: 'Flattened O',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'hand',
    handshape: 'Flattened O',
  },
  {
    URL: './images/Square.gif',
    name: 'Square',
    handshape: '1',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: '1',
  },
  {
    URL: './images/Stay.gif',
    name: 'Stay',
    handshape: 'Y',

    hands: 'One-handed, moving',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: 'Y',
  },
  {
    URL: './images/Steal.gif',
    name: 'Steal',
    handshape: 'V',

    hands: 'Two-handed, asymmetrical',
    movement: 'Non-Repeated',
    location: 'arm',
    handshape: 'V',
  },
  {
    URL: './images/Steam.gif',
    name: 'Steam',
    handshape: 'Bent 5',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'In space',
    handshape: 'Bent 5',
  },
  {
    URL: './images/Stimulate.gif',
    name: 'Stimulate',
    handshape: '1',

    hands: 'Two-handed, asymmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: '1',
  },
  {
    URL: './images/Storm.gif',
    name: 'Storm',
    handshape: 'Bent 5',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: 'Bent 5',
  },
  {
    URL: './images/Strict.gif',
    name: 'Strict',
    handshape: 'Bent V',

    hands: 'One-handed, moving',
    movement: 'Non-Repeated',
    location: 'face',
    handshape: 'Bent V',
  },
  {
    URL: './images/Struggle.gif',
    name: 'Struggle',
    handshape: '1',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'In space',
    handshape: '1',
  },
  {
    URL: './images/Stuck.gif',
    name: 'Stuck',
    handshape: 'V',

    hands: 'One-handed, moving',
    movement: 'Non-Repeated',
    location: 'face',
    handshape: 'V',
  },
  {
    URL: './images/Stuck.gif',
    name: 'Stuck',
    handshape: '5',

    hands: 'Two-handed, asymmetrical',
    movement: 'Repeated',
    location: 'palm',
    handshape: '5',
  },
  {
    URL: './images/Stupid.gif',
    name: 'Stupid',
    handshape: 'S',

    hands: 'One-handed, moving',
    movement: 'Non-Repeated',
    location: 'face',
    handshape: 'S',
  },
  {
    URL: './images/Subway.gif',
    name: 'Subway',
    handshape: 'Y',

    hands: 'Two-handed, asymmetrical',
    movement: 'Repeated',
    location: 'palm',
    handshape: 'Y',
  },
  {
    URL: './images/Summer.gif',
    name: 'Summer',
    handshape: '1',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'face',
    handshape: '1',
  },
  {
    URL: './images/Swear.gif',
    name: 'Swear',
    handshape: '5',

    hands: 'One-handed, moving',
    movement: 'Non-Repeated',
    location: 'face',
    handshape: '5',
  },
  {
    URL: './images/Sweden.gif',
    name: 'Sweden',
    handshape: 'Flattened O',

    hands: 'Two-handed, asymmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: 'Flattened O',
  },
  {
    URL: './images/Swing.gif',
    name: 'Swing',
    handshape: 'H',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: 'H',
  },
  {
    URL: './images/System.gif',
    name: 'System',
    handshape: 'S',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: 'S',
  },
  {
    URL: './images/Take_break.gif',
    name: 'Take break',
    handshape: 'Bent B',

    hands: 'Two-handed, asymmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: 'Bent B',
  },
  {
    URL: './images/Talk-to-self.gif',
    name: 'Talk to self',
    handshape: 'I',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'headside',
    handshape: 'I',
  },
  {
    URL: './images/Tall.gif',
    name: 'Tall',
    handshape: 'Bent B',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'In space',
    handshape: 'Bent B',
  },
  {
    URL: './images/Tan.gif',
    name: 'Tan',
    handshape: 'T',

    hands: 'One-handed, moving',
    movement: 'Non-Repeated',
    location: 'headside',
    handshape: 'T',
  },
  {
    URL: './images/Tape.gif',
    name: 'Tape',
    handshape: 'Open A',

    hands: 'Two-handed, asymmetrical',
    movement: 'Non-Repeated',
    location: 'hand',
    handshape: 'Open A',
  },
  {
    URL: './images/Temple.gif',
    name: 'Temple',
    handshape: 'T',

    hands: 'Two-handed, asymmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: 'T',
  },
  {
    URL: './images/Tend.gif',
    name: 'Tend',
    handshape: 'Open 8',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'torso',
    handshape: 'Open 8',
  },
  {
    URL: './images/Thank_you.gif',
    name: 'Thank you',
    handshape: 'Open B',

    hands: 'One-handed, moving',
    movement: 'Non-Repeated',
    location: 'face',
    handshape: 'Open B',
  },
  {
    URL: './images/Thief.gif',
    name: 'Thief',
    handshape: 'N',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'face',
    handshape: 'N',
  },
  {
    URL: './images/Thin.gif',
    name: 'Thin',
    handshape: 'F ',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: 'F ',
  },
  {
    URL: './images/Think_opposite.gif',
    name: 'Think opposite',
    handshape: '1',

    hands: 'One-handed, moving',
    movement: 'Non-Repeated',
    location: 'face',
    handshape: '1',
  },
  {
    URL: './images/Thursday.gif',
    name: 'Thursday',
    handshape: 'T',

    hands: 'One-handed, moving',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: 'T',
  },
  {
    URL: './images/Tie.gif',
    name: 'Tie',
    handshape: 'Baby O',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: 'Baby O',
  },
  {
    URL: './images/Tiny.gif',
    name: 'Tiny',
    handshape: 'Bent L',

    hands: 'One-handed, moving',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: 'Bent L',
  },
  {
    URL: './images/To-fool.gif',
    name: 'To-fool',
    handshape: 'A',

    hands: 'Two-handed, asymmetrical',
    movement: 'Non-Repeated',
    location: 'face',
    handshape: 'A',
  },
  {
    URL: './images/Toast.gif',
    name: 'Toast',
    handshape: 'Bent V',

    hands: 'Two-handed, asymmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: 'Bent V',
  },
  {
    URL: './images/Touch-heart.gif',
    name: 'Touch heart',
    handshape: 'Open 8',

    hands: 'One-handed, moving',
    movement: 'Non-Repeated',
    location: 'torso',
    handshape: 'Open 8',
  },
  {
    URL: './images/Train.gif',
    name: 'Train',
    handshape: 'H',

    hands: 'Two-handed, asymmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: 'H',
  },
  {
    URL: './images/Trim_hedge.gif',
    name: 'Trim hedge',
    handshape: 'V',

    hands: 'Two-handed, asymmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: 'V',
  },
  {
    URL: './images/Triple.gif',
    name: 'Triple',
    handshape: '3',

    hands: 'Two-handed, asymmetrical',
    movement: 'Non-Repeated',
    location: 'palm',
    handshape: '3',
  },
  {
    URL: './images/Trouble.gif',
    name: 'Trouble',
    handshape: 'Open B',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'headside',
    handshape: 'Open B',
  },
  {
    URL: './images/Trumpet.gif',
    name: 'Trumpet',
    handshape: 'C',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'In space',
    handshape: 'C',
  },
  {
    URL: './images/Try.gif',
    name: 'Try',
    handshape: 'T',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: 'T',
  },
  {
    URL: './images/Twice.gif',
    name: 'Twice',
    handshape: 'K',

    hands: 'Two-handed, asymmetrical',
    movement: 'Non-Repeated',
    location: 'palm',
    handshape: 'K',
  },
  {
    URL: './images/Ugly.gif',
    name: 'Ugly',
    handshape: '1',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'face',
    handshape: '1',
  },
  {
    URL: './images/Uniform.gif',
    name: 'Uniform',
    handshape: 'H',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'torso',
    handshape: 'H',
  },
  {
    URL: './images/Very.gif',
    name: 'Very',
    handshape: 'V',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'hand',
    handshape: 'V',
  },
  {
    URL: './images/Vote.gif',
    name: 'Vote',
    handshape: 'F',

    hands: 'Two-handed, asymmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: 'F',
  },
  {
    URL: './images/Wag.gif',
    name: 'Wag',
    handshape: '1',

    hands: 'Two-handed, asymmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: '1',
  },
  {
    URL: './images/Waist.gif',
    name: 'Waist',
    handshape: 'Bent B',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'torso',
    handshape: 'Bent B',
  },
  {
    URL: './images/Walk.gif',
    name: 'Walk',
    handshape: '3',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'In space',
    handshape: '3',
  },
  {
    URL: './images/Want.gif',
    name: 'Want',
    handshape: '5',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: '5',
  },
  {
    URL: './images/Watch.gif',
    name: 'Watch',
    handshape: 'F',

    hands: 'Two-handed, asymmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: 'F',
  },
  {
    URL: './images/Water.gif',
    name: 'Water',
    handshape: 'W',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'face',
    handshape: 'W',
  },
  {
    URL: './images/Whale.gif',
    name: 'Whale',
    handshape: 'Y',

    hands: 'Two-handed, asymmetrical',
    movement: 'Non-Repeated',
    location: 'arm',
    handshape: 'Y',
  },
  {
    URL: './images/What.gif',
    name: 'What',
    handshape: 'W',

    hands: 'One-handed, moving',
    movement: 'Non-Repeated',
    location: 'In space',
    handshape: 'W',
  },
  {
    URL: './images/Wheel.gif',
    name: 'Wheel',
    handshape: '1',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'In space',
    handshape: '1',
  },
  {
    URL: './images/Wheelchair.gif',
    name: 'Wheelchair',
    handshape: '1',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'In space',
    handshape: '1',
  },
  {
    URL: './images/Who.gif',
    name: 'Who',
    handshape: 'L',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'face',
    handshape: 'L',
  },
  {
    URL: './images/Why.gif',
    name: 'Why',
    handshape: 'Open B',

    hands: 'One-handed, moving',
    movement: 'Non-Repeated',
    location: 'headside',
    handshape: 'Open B',
  },
  {
    URL: './images/Wide.gif',
    name: 'Wide',
    handshape: 'Open B',

    hands: 'Two-handed, symmetrical',
    movement: 'Non-Repeated',
    location: 'hand',
    handshape: 'Open B',
  },
  {
    URL: './images/Wolf.gif',
    name: 'Wolf',
    handshape: '5',

    hands: 'One-handed, moving',
    movement: 'Non-Repeated',
    location: 'face',
    handshape: '5',
  },
  {
    URL: './images/Work.gif',
    name: 'Work',
    handshape: 'S',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: 'S',
  },
  {
    URL: './images/Write.gif',
    name: 'Write',
    handshape: 'Baby O',

    hands: 'Two-handed, asymmetrical',
    movement: 'Repeated',
    location: 'palm',
    handshape: 'Baby O',
  },
  {
    URL: './images/Wrong.gif',
    name: 'Wrong',
    handshape: 'Y',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'face',
    handshape: 'Y',
  },
  {
    URL: './images/Yawn.gif',
    name: 'Yawn',
    handshape: 'Y',

    hands: 'Two-handed, symmetrical',
    movement: 'Repeated',
    location: 'hand',
    handshape: 'Y',
  },
  {
    URL: './images/Yellow.gif',
    name: 'Yellow',
    handshape: 'Y',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'In space',
    handshape: 'Y',
  },
  {
    URL: './images/Yesterday.gif',
    name: 'Yesterday',
    handshape: 'Open A',

    hands: 'One-handed, moving',
    movement: 'Repeated',
    location: 'headside',
    handshape: 'Open A',
  },
]


const STIMULI_SIGNS = [
  'AUSTRALIA',
  'BRIDGE',
  'CHARACTER',
  'CHICAGO',
  'CIGARETTE',
  'COW',
  'CURLY',
  'DIRTY',
  'DYE',
  'FAMOUS',
  'FANCY',
  'FOCUS',
  'FORK',
  'FREE',
  'FUNERAL',
  'GIRAFFE',
  'INTERNET',
  'JESUS',
  'MIX-UP',
  'OLYMPICS',
  'PIG',
  'PUFF-SMOKE',
  'RAINBOW',
  'SALT',
  'SAVE-MONEY',
  'SCOTLAND',
  'SENTENCE',
  'SILLY',
  'STRUGGLE',
  'SUBWAY',
  'TEND',
  'WHEEL',
  'YAWN',
]
// const POSITION_RANGE = [2, 7, 13, 18, 23]
let filterReadySigns = {}

signs.forEach((sign) => {
  filterReadySigns[sign.name] = sign
})

/* filter logic */
let results = []
let filters = {}

function formatSignProperty(property) {
  return Array.isArray(property) ? property.join(', ') : property
}

async function logTime() {
  try {
    const sign = localStorage.getItem('stimuliSign')
    const date = new Date()
    const endTime = date.getTime()
    localStorage.setItem('endTime', endTime)
    const startTime = Number(localStorage.getItem('startTime'))
    const startDate = new Date(startTime)
    // time elapsed for a sign
    const timeElapsed = endTime - startTime
    const signStats = {
      sign,
      startTime: startDate.toISOString(),
      endTime: date.toISOString(),
      timeElapsed,
      participantCode: getParameter('p'),
      signCode: getParameter('i'),
    }
    // send stats data
    await fetch('https://signs-prototype-api.vercel.app/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signStats),
    })

    console.log('stats', signStats)
  } catch (error) {
    console.error(error)
  } finally {
    //replaceLocation('video')
  }
}

function signClick(name) {
  const stimuliSign = localStorage.getItem('stimuliSign')

  if (stimuliSign === name) {
    logTime()
  }
}

function addSign(sign, index) {
  const elementId = `${sign.name}-${index}`
  $('.results-grid').append(
    `<div class="result-box" id="${index}" onclick="signClick('${sign.name}')">
    <div class="result-image" id="${elementId}">
    </div>
    <div class="result-title">
    <p><strong>${sign.name}</strong></p>
    </div>
    <div class="sign-properties">
    <p><strong>Hands:</strong> ${formatSignProperty(sign.hands)}</p>
    <span class="seperator">|</span>
    <p><strong>Handshape:</strong> ${formatSignProperty(sign.handshape)}</p>
    <span class="seperator">|</span>
    <p><strong>Location:</strong> ${formatSignProperty(sign.location)}</p>
    <span class="seperator">|</span>
    <p><strong>Movement:</strong> ${formatSignProperty(sign.movement)}</p>
    </div>
    </div>`
  )
  let curr = document.getElementById(`${elementId}`)
  curr.style.backgroundImage = `url(.${sign.URL})`
}

function addInitialSign(name, index) {
  const id = name.split(' ').join('_')
  const elementId = `${id}-${index}`
  $('.results-grid').append(
    `<div class="result-box"> <div class="result-image" id="${elementId}"></div><div class="result-title"><p> ${name} </p></div></div>`
  )
  let curr = document.getElementById(`${elementId}`)
  curr.style.backgroundImage = `url(../images/${id}.gif)`
}

function updateResults(sign) {
  results.push(sign)
}

const filterContainers = [
  'movement-filters',
  'location-filters',
  'hands-filters',
  'handshape-filters',
]

function hideFilterContainer(containerId) {
  const filtersEl = document.getElementById(containerId)
  filtersEl.style.display = 'none'
}

function toggleFilters(containerId) {
  const filtersEl = document.getElementById(containerId)
  const clearEl = document.getElementById('clear')

  // console.log(filtersEl.style.display, filtersEl, containerId)
  const imgContainer = document.querySelector('.image-column')
  // hide other filter containers and toggle only the filter container with the containerId
  filterContainers
    .filter((id) => id !== containerId)
    .forEach((id) => hideFilterContainer(id))

  // toggle the display property of the filter-container
  filtersEl.style.display = `${
    filtersEl.style.display === 'none' || filtersEl.style.display === ''
      ? 'flex'
      : 'none'
  }`

  imgContainer.style.display = `${
    filtersEl.style.display === 'flex' || filtersEl.style.display === ''
      ? 'grid'
      : 'none'
  }`

  // toggle display of clear all button based on the display of filter-container
  clearEl.style.display = `${
    filtersEl.style.display === 'flex' ? 'block' : 'none'
  }`
}

/** clear all filters */
function clearFilters() {
  const errorMessageEl = document.getElementById('error-message')
  errorMessageEl.style.display = 'none'
  filters = []
  const filterElements = document.querySelectorAll('.filter-column p')
  filterElements.forEach((element) => (element.style.fontWeight = 'normal'))
  filterContainers.forEach((containerId) => hideFilterContainer(containerId))
  // hide clear all button
  const clearEl = document.getElementById('clear')
  clearEl.style.display = 'none'
  // signs container
  // remove all child nodes of signs container
  $('.results-grid')[0].innerHTML = ''
  const localSigns = JSON.parse(localStorage.getItem('signs'))
  localSigns.forEach((sign, index) => addInitialSign(sign, index))
  // update the number of signs in the UI
  $('.number-of-signs').text(localSigns.length)
  let imgContainer = document.querySelector('.image-column')
  imgContainer.style.display = 'none'
  let container = document.querySelector('.filter-container')
  container.style.display = 'none'
  let images = document.querySelectorAll(`.image-column img`)
  if (images) {
    images.forEach((img) => (img.style.border = 'none'))
  }
}

// function getParameter(p) {
//   let parsedUrl = new URL(window.location.href)
//   const code = Number(parsedUrl.searchParams.get(p))
//   if (code && code <= 5) {
//     return code
//   } else if (code > 5) {
//     return code % 5
//   } else {
//     return 1
//   }
// }

/**
  @param {String} type
  @param {String | Number} value
  @param {Number} index (position of the filter element)
*/
function filterByType(type, value, index = 0) {
  results = []
  const localSigns = JSON.parse(localStorage.getItem('signs'))
  const user_signs = localSigns
    .map((signName) => {
      console.log(signName, filterReadySigns[signName])
      return filterReadySigns[signName]
    })
    .filter((sign) => sign !== undefined)

  // signs container
  const signsContainer = document.getElementById('signs')
  // remove all child nodes of signs container
  signsContainer.innerHTML = ''

  document.getElementById(`${type}-${index}`).style.fontWeight = 'bold'
  let img = document.querySelector(`#${type}-${index} img`)
  if (img) {
    img.style.border = '1px solid #000'
  }

  // update filters
  // check if filters object has a key (type)
  if (filters[type]) {
    if (!filters[type].includes(value)) {
      filters[type].push(value)
    } else {
      // remove that value from type
      document.getElementById(`${type}-${index}`).style.fontWeight = 'normal'
      if (img) {
        img.style.border = 'none'
      }
      filters[type] = filters[type].filter((val) => val !== value)
    }
  } else {
    filters[type] = [value]
  }

  console.log(filters)

  console.log(user_signs)
  user_signs.forEach((sign) => {
    if (sign) {
      const filterTypes = Object.keys(filters)
      if (filterTypes.length > 0) {
        let signMatched = []
        filterTypes.forEach((type) => {
          filters[type].forEach((val) => {
            if (val === sign[type]) {
              signMatched.push(true)
            } else {
              signMatched.push(false)
            }
          })
        })

        if (!signMatched.includes(false)) {
          updateResults(sign)
        }
      } else {
        updateResults(sign)
      }
    }
  })

  console.log(results)

  const errorMessageEl = document.getElementById('error-message')

  if (results.length === 0) {
    $('.results-grid-container').innerHTML = ''
    $('.results-grid-container').height(0)
    errorMessageEl.style.display = 'flex'
    errorMessageEl.textContent = 'No signs found. Update your filters!'
  } else {
    errorMessageEl.style.display = 'none'

    // const stimuliSign = localStorage.getItem('stimuliSign')
    // console.log('StimuliSign', stimuliSign)
    // let mainIndex = -1
    // let position_sign = {}
    // const participantCode = getParameter('p')
    //const positionIndex = POSITION_RANGE[participantCode - 1]
    //let ui_signs = []

    // results.forEach((sign, index) => {
    //   if (
    //     sign.name === stimuliSign &&
    //     STIMULI_SIGNS.includes(stimuliSign.toUpperCase())
    //   ) {
    //     mainIndex = index
    //     if (position_sign[positionIndex - 1]) {
    //       position_sign[index] = position_sign[positionIndex - 1]
    //       position_sign[positionIndex - 1] = sign
    //     } else {
    //       position_sign[positionIndex - 1] = sign
    //     }
    //   } else {
    //     if (position_sign[index]) {
    //       position_sign[mainIndex] = sign
    //     } else {
    //       position_sign[index] = sign
    //     }
    //   }
    // })

    // ui_signs = Object.values(position_sign)

    // console.log(position_sign, ui_signs)
    const topResults = results.filter((result) => {
      return result[type] === value
    })

    const topSigns = topResults.map((result) => result.name)

    let bottomResults = results.filter(
      (result) => !topSigns.includes(result.name)
    )

    console.log(topResults.length, bottomResults.length, results.length)

    results = topResults.concat(bottomResults)

    // loop through the results and create a div with an img element for each sign
    // append the above elements to signs container
    results.forEach((sign, index) => {
      // const divElement = document.createElement('div')
      // const imgElement = document.createElement('img')
      // const labelElement = document.createElement('p')
      // labelElement.classList.add('result-title')
      // imgElement.classList.add('result-image')
      // imgElement.src = sign.URL
      // imgElement.alt = `${sign.name.toLocaleUpperCase()} Sign Image`
      // imgElement.title = `${sign.name} Sign Image`
      // labelElement.innerText = `${sign.name}`
      // divElement.appendChild(imgElement)
      // divElement.appendChild(labelElement)
      // divElement.classList.add('result-box')
      // signsContainer.appendChild(divElement)
      addSign(sign, index)
    })
  }

  // update the number of signs in the UI
  $('.number-of-signs').text(results.length)
}
