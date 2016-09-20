<!--
  var setWidth     = 1000;            //window width
  var setHeight    = 900;             //window height
  var info   = new Array(8);          //image info
  info[0]    = new Array();           //image names, page info will be "info_"+image_name+".js"
  info[1]    = new Array();           //number of thumbnails, file names will be image_name+'_'+number+image_ext
  info[2]    = new Array();           //thumbnail layout 0-landscape(4:3) 1-portrait(3:4) 2-landscape(3:2) 3-portrait(2:3)
  info[3]    = new Array();           //image title to be shown
  info[4]    = new Array();           //image captions to be shown in the status bar
  info[5]    = maindir+"thumbnail/";  //thumbnail directory
  info[6]    = ".jpg";                //image extension
  info[7]    = new Array();           //flag to show password protection
  var j      = 0;
  info[0][j] = "0406yellowstone";
  info[1][j] = 5;
  info[2][j] = 1;
  info[3][j] = "6/2004 Yellowstone";
  info[4][j++] = "Trip to Grand Teton, Yellowstone, Devils Tower(Wyoming), and Mount Rushmore(South Dakota).";
  info[0][j] = "0408oldrag";
  info[1][j] = 4;
  info[2][j] = 0;
  info[3][j] = "8/2004 Old Rag";
  info[4][j++] = "Climbing Old Rag Mountain(Virginia).";
  info[0][j] = "0409acadia";
  info[1][j] = 6;
  info[2][j] = 0;
  info[3][j] = "9/2004 Acadia";
  info[4][j++] = "Camping trip to Acadia National Park(Maine).";
  info[0][j] = "0409festival";
  info[1][j] = 6;
  info[2][j] = 0;
  info[3][j] = "9/2004 Festival";
  info[4][j++] = "First Americans Festival on the National Mall in Washington, and photos of the American Indian Museum(DC).";
  info[0][j] = "0410catoctin";
  info[1][j] = 4;
  info[2][j] = 1;
  info[3][j] = "10/2004 Catoctin";
  info[4][j++] = "Hiking in Catoctin Mountain Park(Maryland). The famous Camp David is located in an undisclosed place inside the park.";
  info[0][j] = "0501cocanal";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "1/2005 C&O Canal";
  info[4][j++] = "C&O Canal and Great Falls(Maryland).";
  info[0][j] = "0501snow";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "1/2005 Snow";
  info[4][j++] = "Snow scene at North Potomac(Maryland).";
  info[0][j] = "0504sakura";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "4/2005 Sakura";
  info[4][j++] = "2005 National Cherry Blossom Festival Parade in Washington(DC).";
  info[0][j] = "0504zoo";
  info[1][j] = 6;
  info[2][j] = 2;
  info[3][j] = "4/2005 Zoo";
  info[4][j++] = "National Zoo in Washington(DC).";
  info[0][j] = "0505airshow";
  info[1][j] = 6;
  info[2][j] = 2;
  info[3][j] = "5/2005 Air Show";
  info[4][j++] = "2005 Joint Service Open House Air Show in Andrews Air Force Base(Maryland).";
  info[0][j] = "0506balloon";
  info[1][j] = 5;
  info[2][j] = 3;
  info[3][j] = "6/2005 Balloon";
  info[4][j++] = "York County Balloon Festival(Pennsylvania).";
  info[0][j] = "0507firework";
  info[1][j] = 5;
  info[2][j] = 3;
  info[3][j] = "7/2005 Fireworks";
  info[4][j++] = "Fourth of July Fireworks at the National Mall in Washington(DC).";
  info[0][j] = "0507waterfall";
  info[1][j] = 6;
  info[2][j] = 2;
  info[3][j] = "7/2005 Waterfalls";
  info[4][j++] = "Waterfalls in Ricketts Glen State Park(Pennsylvania).";
  info[0][j] = "0509parade";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "9/2005 Parade";
  info[4][j++] = "Labor Day Parade in Olde Towne Gaithersburg(Maryland).";
  info[0][j] = "0509moon";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "9/2005 Harvest Moon";
  info[4][j++] = "Harvest Moon Shot at Backyard(Maryland).";
  info[0][j] = "0510kennedycenter";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "10/2005 Chinese Festival";
  info[4][j++] = "The Chinese Festival at the Kennedy Center in Washington(DC).";
  info[0][j] = "0510blackwater";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "10/2005 Waterfall";
  info[4][j++] = "Blackwater Falls in the Blackwater Falls State Park(West Virginia).";
  info[0][j] = "0510birding";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "10/2005 Birding";
  info[4][j++] = "Birding on the Blackwater National Wildlife Refuge(Maryland).";
  info[0][j] = "0511wheaton";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "11/2005 Garden";
  info[4][j++] = "Brookside Gardens in the Wheaton Regional Park(Maryland).";
  info[0][j] = "0511assateague";
  info[1][j] = 6;
  info[2][j] = 2;
  info[3][j] = "11/2005 Assateague";
  info[4][j++] = "Camping in Assateague Island(Maryland, Virginia).";
  info[0][j] = "0512snow";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "12/2005 Snow";
  info[4][j++] = "Snow Scenes outside the House and at the Antietam National Battlefield(Maryland).";
  info[0][j] = "0512congaree";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "12/2005 Congaree";
  info[4][j++] = "Congaree National Park(South Carolina).";
  info[0][j] = "0512everglades";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "12/2005 Everglades";
  info[4][j++] = "Everglades National Park(Florida).";
  info[0][j] = "0512keys";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "12/2005 Florida Keys";
  info[4][j++] = "Florida Keys(Florida).";
  info[0][j] = "0512biscayne";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "12/2005 Biscayne";
  info[4][j++] = "Biscayne National Park(Florida).";
  info[0][j] = "0512merritt";
  info[1][j] = 4;
  info[2][j] = 3;
  info[3][j] = "12/2005 Merritt Island";
  info[4][j++] = "Merritt Island National Wildlife Refuge(Florida).";
  info[0][j] = "0601butterfly";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "1/2006 Butterfly";
  info[4][j++] = "Butterflies and Hummingbird at the Pollinarium of the National Zoo in Washington(DC).";
  info[0][j] = "0601party";
  info[1][j] = 6;
  info[2][j] = 2;
  info[3][j] = "1/2006 Party";
  info[4][j++] = "Spring Festival Eve Dinner Party(Maryland).";
  info[0][j] = "0601festival";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "1/2006 Spring Festival";
  info[4][j++] = "The Asian Community Celebrating the Lunar New Year at the Lakeforest Mall in Gaithersburg(Maryland).";
  info[0][j] = "0602moon";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "2/2006 Daytime Moon";
  info[4][j++] = "The Waxing Gibbous Moon over Tree Tops during Daytime(Maryland).";
  info[0][j] = "0602granduncle";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "2/2006 Grand Uncle";
  info[4][j++] = "Visiting my Aunt and Grand Uncle(Pennsylvania).";
  info[0][j] = "0602snow";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "2/2006 Snow";
  info[4][j++] = "Heavy Snow over the Weekend(Maryland).";
  info[0][j] = "0602willow";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "2/2006 Willow";
  info[4][j++] = "A Willow Tree by the Potomac River in Washington(DC).";
  info[0][j] = "0603orchid";
  info[1][j] = 4;
  info[2][j] = 3;
  info[3][j] = "3/2006 Orchid";
  info[4][j++] = "Maryland Orchid Society's Annual Spring Show in Timonium State Fairground(Maryland).";
  info[0][j] = "0604jamestown";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "4/2006 Jamestown";
  info[4][j++] = "Jamestown, the First Permanent English Settlement in the North America(Virginia).";
  info[0][j] = "0604greatblue";
  info[1][j] = 4;
  info[2][j] = 3;
  info[3][j] = "4/2006 Heron";
  info[4][j++] = "Story of a Great Blue Heron(Maryland).";
  info[0][j] = "0604dogshow";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "4/2006 Dog Show";
  info[4][j++] = '"Cherry Blossom Cluster" Dog Show in Timonium State Fairground(Maryland).';
  info[0][j] = "0604tulip";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "4/2006 Sherwood Garden";
  info[4][j++] = "Visiting Sherwood Garden in North Baltimore with My Friends(Maryland).";
  info[0][j] = "0605dance";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "5/2006 Dance";
  info[4][j++] = "Street Dance in Washington(DC).";
  info[0][j] = "0605dc";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "5/2006 Washington DC";
  info[4][j++] = "Touring Washington DC with my Uncle(DC).";
  info[0][j] = "0605celtic";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "5/2006 Celtic Festival";
  info[4][j++] = "7th Annual Frederick Celtic Festival(Maryland).";
  info[0][j] = "0605innerharbor";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "5/2006 Inner Harbor";
  info[4][j++] = "Baltimore Inner Harbor(Maryland).";
  info[0][j] = "0605airshow";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "5/2006 Air Show";
  info[4][j++] = "2006 Joint Service Open House Air Show in Andrews Air Force Base(Maryland).";
  info[0][j] = "0605philly";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "5/2006 Philly";
  info[4][j++] = "Visiting my Grand Uncle and Aunt in the Memorial Day Weekend(Pennsylvania, New Jersey).";
  info[0][j] = "0606pocono";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "6/2006 Pocono 500";
  info[4][j++] = "NASCAR NEXTEL Cup Series Pocono 500 Race(Pennsylvania).";
  info[0][j] = "0606whitehouse";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "6/2006 White House";
  info[4][j++] = "Weekend's Trip to the White House(DC).";
  info[0][j] = "0607indepday";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "7/2006 Independence Day";
  info[4][j++] = "Independence Day Parade and Fireworks Show(DC).";
  info[0][j] = "0607picnic";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "7/2006 Picnic";
  info[4][j++] = "Friends Gathered at the Picnic to Say Goodbye to Qing and Yuanzhen(Maryland).";
  info[0][j] = "0607outerbanks";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "7/2006 Outer Banks";
  info[4][j++] = "Camping in the Outer Banks(North Carolina).";
  info[0][j] = "0607windmill";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "7/2006 Windmills";
  info[4][j++] = "Windmills at Somerset and Mill Run Wind Farms(Pennsylvania).";
  info[0][j] = "0607dinner";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "7/2006 Dinner";
  info[4][j++] = "Friends Having Dinner With Tatiana at the Mykonos Grill Restaurant(Maryland).";
  info[0][j] = "0608countyfair";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "8/2006 County Fair";
  info[4][j++] = "2006 Howard County Fair(Maryland).";
  info[0][j] = "0608renaissance";
  info[1][j] = 6;
  info[2][j] = 3;
  info[3][j] = "8/2006 Renaissance Festival";
  info[4][j++] = "2006 Maryland Renaissance Festival(Maryland).";
  info[0][j] = "0609dance";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "9/2006 Outdoor Dance";
  info[4][j++] = "Dancing on the River Terrace at the Kennedy Center(DC).";
  info[0][j] = "0609harpersferry";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "9/2006 Harpers Ferry";
  info[4][j++] = "Harpers Ferry(West Virginia).";
  info[0][j] = "0609farm";
  info[1][j] = 4;
  info[2][j] = 3;
  info[3][j] = "9/2006 Fall Harvest";
  info[4][j++] = "Pig Race and Pumpkin Picking at Great Country Farms(Virginia).";
  info[0][j] = "0610moonfestival";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "10/2006 Moon Festival";
  info[4][j++] = "Mid-autumn Festival Gala Evening at University of Pennsylvania(Pennsylvania).";
  info[0][j] = "0610whitemountain";
  info[1][j] = 5;
  info[2][j] = 3;
  info[3][j] = "10/2006 White Mountain";
  info[4][j++] = "Watching Fall Colors in White Mountain National Forest(New Hampshire).";
  info[0][j] = "0610battle";
  info[1][j] = 6;
  info[2][j] = 2;
  info[3][j] = "10/2006 Battle Reenactment";
  info[4][j++] = "The 142nd Anniversary Reenactment of the Battle of Cedar Creek(Virginia).";
  info[0][j] = "0610dance";
  info[1][j] = 4;
  info[2][j] = 3;
  info[3][j] = "10/2006 Indian Dance";
  info[4][j++] = "Rama Vaidyanathan Performing Indian Bharata Natyam Dance in the Freer and Sackler Galleries(DC).";
  info[0][j] = "0610halloween";
  info[1][j] = 5;
  info[2][j] = 3;
  info[3][j] = "10/2006 Halloween";
  info[4][j++] = "2006 Halloween in Olde Town Gaithersburg(Maryland).";
  info[0][j] = "0611annapolis";
  info[1][j] = 5;
  info[2][j] = 3;
  info[3][j] = "11/2006 Annapolis";
  info[4][j++] = "Annapolis and Eastport Tug of War(Maryland).";
  info[0][j] = "0611catshow";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "11/2006 Cat Show";
  info[4][j++] = "Capital Cat Fancier Show in Gaithersburg's Montgomery County Fairground(Maryland).";
  info[0][j] = "0611yun";
  info[1][j] = 5;
  info[2][j] = 3;
  info[3][j] = "11/2006 Motherhood";
  info[4][j++] = "Yun and Her Baby Girl(Maryland).";
  info[0][j] = "0611thanksgiving";
  info[1][j] = 4;
  info[2][j] = 3;
  info[3][j] = "11/2006 Thanksgiving";
  info[4][j++] = "Thanksgiving Holiday(Maryland).";
  info[0][j] = "0612aquarium";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "12/2006 Aquarium";
  info[4][j++] = "National Aquarium in Baltimore(Maryland).";
  info[0][j] = "0612lights";
  info[1][j] = 6;
  info[2][j] = 2;
  info[3][j] = "12/2006 Holiday Lights";
  info[4][j++] = "Holiday Lights(Virginia, DC, Maryland).";
  info[0][j] = "0612xiaomi";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "12/2006 Baby Girl";
  info[4][j++] = "Two Weeks Old Xiao Mi(Maryland).";
  info[0][j] = "0612commencement";
  info[1][j] = 5;
  info[2][j] = 3;
  info[3][j] = "12/2006 Commencement";
  info[4][j++] = "Huigang Attending the 2006 University of Maryland Commencement(Maryland).";
  info[0][j] = "2006cobirding";
  info[1][j] = 6;
  info[2][j] = 2;
  info[3][j] = "2006 C&O Birds";
  info[4][j++] = "Birding at C&O Canal in 2006(Maryland).";
  info[0][j] = "2006church";
  info[1][j] = 4;
  info[2][j] = 3;
  info[3][j] = "2006 Churches";
  info[4][j++] = "Religious Buildings Shot in 2006(DC, Maryland, Pennsylvania, Virginia, West Virginia).";
  info[0][j] = "0701bikeshow";
  info[1][j] = 6;
  info[2][j] = 3;
  info[3][j] = "1/2007 Motorcycle Show";
  info[4][j++] = "2007 Cycle World International Motorcycle Show in Washington(DC).";
  info[0][j] = "0701ski";
  info[1][j] = 4;
  info[2][j] = 3;
  info[3][j] = "1/2007 Skiing";
  info[4][j++] = "Deep Creek Mountain Resort(Maryland).";
  info[0][j] = "0701autoladies";
  info[1][j] = 5;
  info[2][j] = 3;
  info[3][j] = "1/2007 Auto Show Ladies";
  info[4][j++] = "Ladies in 2007 Washington Auto Show(DC).";
  info[0][j] = "0701autoshow";
  info[1][j] = 6;
  info[2][j] = 2;
  info[3][j] = "1/2007 Auto Show";
  info[4][j++] = "2007 Washington Auto Show(DC).";
  info[0][j] = "0701protest";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "1/2007 Anti-war Protest";
  info[4][j++] = "Anti-war Protest in Washington(DC).";
  info[0][j] = "0701bridalshow";
  info[1][j] = 5;
  info[2][j] = 3;
  info[3][j] = "1/2007 Bridal Show";
  info[4][j++] = "Fashion Show in 2007 Washington Bridal Show and Wedding Expo(Virginia).";
  info[0][j] = "0702xiaomi";
  info[1][j] = 6;
  info[2][j] = 3;
  info[3][j] = "2/2007 Xiao Mi";
  info[4][j++] = "Two and a Half Months Old Xiao Mi on Chinese New Year's Eve(Maryland).";
  info[0][j] = "0702parade";
  info[1][j] = 6;
  info[2][j] = 2;
  info[3][j] = "2/2007 New Year Parade";
  info[4][j++] = "2007 Chinatown Spring Festival Parade(DC).";
  info[0][j] = "0703parade";
  info[1][j] = 5;
  info[2][j] = 3;
  info[3][j] = "3/2007 St. Patrick's Day";
  info[4][j++] = "2007 Alexandria St. Patrick's Day Parade(Virginia).";
  info[0][j] = "0703xiaomi";
  info[1][j] = 3;
  info[2][j] = 3;
  info[3][j] = "3/2007 Xiao Mi";
  info[4][j++] = "One Hundred Days Old Xiao Mi(Maryland).";
  info[0][j] = "0703bhangra";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "3/2007 Bhangra";
  info[4][j++] = "The 14th Bangra Blowout Held at D.A.R Constitution Hall in Washington(DC).";
  info[0][j] = "0704parade";
  info[1][j] = 6;
  info[2][j] = 2;
  info[3][j] = "4/2007 Parade";
  info[4][j++] = "2007 National Cherry Blossom Festival Parade in Washington(DC).";
  info[0][j] = "0704wedding";
  info[1][j] = 6;
  info[2][j] = 3;
  info[3][j] = "4/2007 Wedding";
  info[4][j++] = "Xiaohua and Weidong's Wedding(Maryland).";
  info[0][j] = "0704sherwoodgarden";
  info[1][j] = 6;
  info[2][j] = 3;
  info[3][j] = "4/2007 Sherwood Garden";
  info[4][j++] = "Xiao Mi Visiting Baltimore's Sherwood Garden with Parents and Grandparents(Maryland).";
  info[0][j] = "0705cincodemayo";
  info[1][j] = 5;
  info[2][j] = 3;
  info[3][j] = "5/2007 Cinco de Mayo";
  info[4][j++] = "2007 National Cinco de Mayo Festival in Washington(DC).";
  info[0][j] = "0705phc";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "5/2007 Horse Center";
  info[4][j++] = "Potomac Horse Center Spring Open House(Maryland).";
  info[0][j] = "0705hula";
  info[1][j] = 6;
  info[2][j] = 2;
  info[3][j] = "5/2007 Hula";
  info[4][j++] = "2007 Hawaiian Festival in National Museum of the American Indian(DC).";
  info[0][j] = "0705airshow";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "5/2007 Air Show";
  info[4][j++] = "2007 Joint Service Open House Air Show in Andrews Air Force Base(Maryland).";
  info[0][j] = "0705circus";
  info[1][j] = 6;
  info[2][j] = 3;
  info[3][j] = "5/2007 Circus";
  info[4][j++] = "Cole Brothers Circus at Montgomery County Fairgrounds in Gaithersburg(Maryland).";
  info[0][j] = "0705rollingthunder";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "5/2007 Rolling Thunder";
  info[4][j++] = "The 20th Rolling Thunder Motorcycle Rally in Washington(DC).";
  info[0][j] = "0706regatta";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "6/2007 Cardboard Boat Regatta";
  info[4][j++] = "Cardboard Boat Regatta Held on Lake Accotink in Springfield(Virginia).";
  info[0][j] = "0706capitalpride";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "6/2007 Capital Pride Parade";
  info[4][j++] = "2007 Capital Pride Parade(DC).";
  info[0][j] = "0706hula";
  info[1][j] = 6;
  info[2][j] = 2;
  info[3][j] = "6/2007 Hula";
  info[4][j++] = "Hula Performance by Halau O`Aulani at Rosslyn Spectrum(Virginia).";
  info[0][j] = "0706bmd";
  info[1][j] = 6;
  info[2][j] = 3;
  info[3][j] = "6/2007 BMD";
  info[4][j++] = "Dance Performance by Bowen McCauley Dance at Lubber Run Amphitheater(Virginia).";
  info[0][j] = "0706carnival";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "6/2007 Caribbean Carnival";
  info[4][j++] = "2007 DC Caribbean Carnival Parade(DC).";
  info[0][j] = "0706folklife";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "6/2007 Folklife Festival";
  info[4][j++] = "2007 Smithsonian Folklife Festival Celebrating the Mekong River Culture(DC).";
  info[0][j] = "0707fireworks";
  info[1][j] = 4;
  info[2][j] = 3;
  info[3][j] = "7/2007 Fireworks";
  info[4][j++] = "Independence Day Fireworks at National Mall in Washington(DC).";
  info[0][j] = "0707rodeo";
  info[1][j] = 6;
  info[2][j] = 2;
  info[3][j] = "7/2007 Rodeo";
  info[4][j++] = "Cowtown Rodeo(New Jersey).";
  info[0][j] = "0707asianfestival";
  info[1][j] = 5;
  info[2][j] = 3;
  info[3][j] = "7/2007 Asian Festival";
  info[4][j++] = "4th Annual Asian Festival in Reston(Virginia).";
  info[0][j] = "0708irishfestival";
  info[1][j] = 3;
  info[2][j] = 2;
  info[3][j] = "8/2007 Irish Festival";
  info[4][j++] = "Alexandria Irish Festival(Virginia).";
  info[0][j] = "0708mcagfair";
  info[1][j] = 6;
  info[2][j] = 2;
  info[3][j] = "8/2007 County Fair";
  info[4][j++] = "Montgomery County Agricultural Fair(Maryland).";
  info[0][j] = "0708renaissance";
  info[1][j] = 6;
  info[2][j] = 3;
  info[3][j] = "8/2007 Renaissance Festival";
  info[4][j++] = "2007 Maryland Renaissance Festival(Maryland).";
  info[0][j] = "0709laborday";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "9/2007 Labor Day";
  info[4][j++] = "Labor Day Parade in Olde Towne Gaithersburg(Maryland).";
  info[0][j] = "0709whale";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "9/2007 Whale Watching";
  info[4][j++] = "Whale watching in Stellwagen Bank National Marine Sanctuary off Cape Cod(Massachusetts).";
  info[0][j] = "0709wedding";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "9/2007 Wedding";
  info[4][j++] = "Tzuching and Chungen's Wedding Ceremony at University of Maryland Memorial Chapel(Maryland).";
  info[0][j] = "0709pumpkin";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "9/2007 Pumpkinfest";
  info[4][j++] = "Giant Pumpkins and Pumpkin Regatta in 2007 Cooperstown Pumpkinfest(New York).";
  info[0][j] = "0710dreamcatcher";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "10/2007 Dreamcatcher Rally";
  info[4][j++] = "Dreamcatcher Rally in Ripken Stadium(Maryland).";
  info[0][j] = "0710motocross";
  info[1][j] = 6;
  info[2][j] = 3;
  info[3][j] = "10/2007 Motocross";
  info[4][j++] = "Motocross Maryland State Championship at Budds Creek(Maryland).";
  info[0][j] = "0710balloon";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "10/2007 Balloon Festival";
  info[4][j++] = "Shenandoah Valley Hot Air Balloon Festival(Virginia).";
  info[0][j] = "0710mexicandance";
  info[1][j] = 3;
  info[2][j] = 3;
  info[3][j] = "10/2007 Mexican Dance";
  info[4][j++] = "Los Quetzales Mexican Dance(DC).";
  info[0][j] = "0710zombie";
  info[1][j] = 4;
  info[2][j] = 3;
  info[3][j] = "10/2007 Zombie";
  info[4][j++] = "2007 Zombie Lurch and Thriller Dance(DC).";
  info[0][j] = "0711blackwater";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "11/2007 Birding";
  info[4][j++] = "Birding on the Blackwater National Wildlife Refuge(Maryland).";
  info[0][j] = "0712aerialview";
  info[1][j] = 2;
  info[2][j] = 3;
  info[3][j] = "12/2007 Aerial View";
  info[4][j++] = "Aerial View.";
  info[0][j] = "0712xiaomi";
  info[1][j] = 3;
  info[2][j] = 2;
  info[3][j] = "12/2007 Xiao Mi";
  info[4][j++] = "Xiao Mi in Xiamen(Fujian, China).";
  info[0][j] = "0712864classmates";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "12/2007 Classmates Reunion";
  info[4][j++] = "Meeting Senior High School Classmates(Fujian, China).";
  info[0][j] = "0712833classmates";
  info[1][j] = 6;
  info[2][j] = 2;
  info[3][j] = "12/2007 Classmates Reunion";
  info[4][j++] = "Dinner with Junior High School Classmates(Fujian, China).";
  info[0][j] = "0712hangzheng";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "12/2007 Hangzheng";
  info[4][j++] = "Cute Little Hangzheng(Fujian, China).";
  info[0][j] = "0712family";
  info[1][j] = 6;
  info[2][j] = 2;
  info[3][j] = "12/2007 My Family";
  info[4][j++] = "Visiting My Family in Longyan(Fujian, China).";
  info[0][j] = "0802beijing";
  info[1][j] = 6;
  info[2][j] = 2;
  info[3][j] = "12/2007-2/2008 Beijing";
  info[4][j++] = "Alleys and other Scenes(Beijing, China).";
  info[0][j] = "2007cobirding";
  info[1][j] = 6;
  info[2][j] = 2;
  info[3][j] = "2007 C&O Birds";
  info[4][j++] = "Birding at C&O Canal in 2007(Maryland).";
  info[0][j] = "0802harajuku";
  info[1][j] = 5;
  info[2][j] = 3;
  info[3][j] = "2/2008 Harajuku Evening";
  info[4][j++] = "Harajuku Evening in the Kennedy Center Millennium Stage(DC).";
  info[0][j] = "0802latino";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "2/2008 Latino Dance";
  info[4][j++] = "An Evening of Afro-Latino Culture at Josephine Butler Center(DC).";
  info[0][j] = "0803stpatrickparade";
  info[1][j] = 6;
  info[2][j] = 2;
  info[3][j] = "3/2008 St. Patrick's Day";
  info[4][j++] = "2008 Alexandria St. Patrick's Day Parade(Virginia).";
  info[0][j] = "0803cheer";
  info[1][j] = 3;
  info[2][j] = 2;
  info[3][j] = "3/2008 Cheer Competition";
  info[4][j++] = "Athletic Championships Cheer Competition in the Show Place Arena(Maryland).";
  info[0][j] = "0803dance";
  info[1][j] = 5;
  info[2][j] = 3;
  info[3][j] = "3/2008 World Dance";
  info[4][j++] = "6th Annual World Dance Showcase in the Publick Playhouse for the Performing Arts(Maryland).";
  info[0][j] = "0804xiaomi";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "4/2008 Xiao Mi";
  info[4][j++] = "Xiao Mi and Parents Viewed the Cherry Blossoms in Kenwood Chevy Chase(Maryland).";
  info[0][j] = "0804cbfestival";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "4/2008 Cherry Blossom Festival";
  info[4][j++] = "Performances in 2008 National Cherry Blossom Festival(DC).";
  info[0][j] = "0804firedance";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "4/2008 Fire Dance";
  info[4][j++] = "Fire Dance Performance in Greenbelt's Crazy Quilt Music Festival(Maryland).";
  info[0][j] = "0805cathedral";
  info[1][j] = 6;
  info[2][j] = 2;
  info[3][j] = "5/2008 National Cathedral";
  info[4][j++] = "National Cathedral Celebrates its Centennial with Spectacular Illumination(DC).";
  info[0][j] = "0805airshow";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "5/2008 Air Show";
  info[4][j++] = "2008 Joint Service Open House Air Show in Andrews Air Force Base(Maryland).";
  info[0][j] = "0805hula";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "5/2008 Hula";
  info[4][j++] = "Hula Performance by Halau O`Aulani at the National Museum of the American Indian(DC).";
  info[0][j] = "0807bhutan";
  info[1][j] = 6;
  info[2][j] = 2;
  info[3][j] = "7/2008 Bhutan";
  info[4][j++] = "2008 Smithsonian Folklife Festival Celebrating the Culture of Bhutan(DC).";
  info[0][j] = "0807fireworks";
  info[1][j] = 1;
  info[2][j] = 3;
  info[3][j] = "7/2008 Fireworks";
  info[4][j++] = "Fireworks on 2008 Alexandria Birthday Celebration(Virginia).";
  info[0][j] = "0807saffron";
  info[1][j] = 6;
  info[2][j] = 2;
  info[3][j] = "7/2008 Belly Dance";
  info[4][j++] = "Belly Dance Performance by Saffron Dance at Lubber Run Amphitheater(Virginia).";
  info[0][j] = "0808thaifestival";
  info[1][j] = 6;
  info[2][j] = 2;
  info[3][j] = "8/2008 Thai Festival";
  info[4][j++] = "2008 Thai Festival in Union Station(DC).";
  info[0][j] = "0809laborday";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "9/2008 Labor Day";
  info[4][j++] = "Labor Day Parade in Olde Towne Gaithersburg(Maryland).";
  info[0][j] = "0809mcbsg";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "9/2008 Welcome Party";
  info[4][j++] = "Maryland Chinese Bible Study Group(MCBSG) 2008 Welcome Party(Maryland).";
  info[0][j] = "0809xiaomi";
  info[1][j] = 3;
  info[2][j] = 3;
  info[3][j] = "9/2008 Xiao Mi";
  info[4][j++] = "Xiao Mi at 2008 MCBSG Party(Maryland).";
  info[0][j] = "0809capoeira";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "9/2008 Capoeira Festival";
  info[4][j++] = "The Brazilian Embassy celebrates the culture heritage of capoeira in the Historical Society of Washington, DC(DC).";
  info[0][j] = "0809adamsmorgan";
  info[1][j] = 4;
  info[2][j] = 3;
  info[3][j] = "9/2008 Adams Morgan Day";
  info[4][j++] = "The 30th Annual Adams Morgan Day Festival(DC).";
  info[0][j] = "0809qohsfootball";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "9/2008 Football Game";
  info[4][j++] = "Friday Night High School Football Game between Quince Orchard Cougars and Damascus Yellow Jackets(Maryland).";
  info[0][j] = "0809tarara";
  info[1][j] = 3;
  info[2][j] = 3;
  info[3][j] = "9/2008 Wine Festival";
  info[4][j++] = "Wine Tasting and Grape Stomping at the 13th Annual Fall Wine Festival in Tarara Winery(Virginia).";
  info[0][j] = "0809dance";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "9/2008 Dances";
  info[4][j++] = "Native American Indian Dances and Bolivian Tinku Dances Performed in the National Museum of the American Indian(DC).";
  info[0][j] = "0810oktoberfest";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "10/2008 Oktoberfest";
  info[4][j++] = "The 26th Germantown Oktoberfest(Maryland).";
  info[0][j] = "0810turkfestival";
  info[1][j] = 5;
  info[2][j] = 3;
  info[3][j] = "10/2008 Turkish Festival";
  info[4][j++] = "2008 Turkish Festival(DC).";
  info[0][j] = "0810bmoreoktoberfest";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "10/2008 Oktoberfest";
  info[4][j++] = "Maryland Brewer's Oktoberfest in Timonium State Fairgrounds(Maryland).";
  info[0][j] = "0810shawnee";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "10/2008 Timber & Balloon Festival";
  info[4][j++] = "Shawnee Mountain 2008 Timber & Balloon Festival(Pennsylvania).";
  info[0][j] = "0810dragqueenrace";
  info[1][j] = 6;
  info[2][j] = 2;
  info[3][j] = "10/2008 Drag Queen Race";
  info[4][j++] = "2008 Dupont Circle Drag Queen High Heel Race(DC).";
  info[0][j] = "0811wedding";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "11/2008 Wedding";
  info[4][j++] = "Jing and Brandon's Wedding Held at Turf Valley Resort(Maryland).";
  info[0][j] = "0811thanksgiving";
  info[1][j] = 5;
  info[2][j] = 3;
  info[3][j] = "11/2008 Thanksgiving";
  info[4][j++] = "Spending Thanksgiving with Grand Uncle and Grand Aunt(Pennsylvania, New York).";
  info[0][j] = "0812xiaomi";
  info[1][j] = 5;
  info[2][j] = 3;
  info[3][j] = "12/2008 Xiao Mi";
  info[4][j++] = "Two-year-old Xiao Mi(Maryland).";
  info[0][j] = "2008cobirding";
  info[1][j] = 6;
  info[2][j] = 2;
  info[3][j] = "2008 C&O Birds";
  info[4][j++] = "Birding at C&O Canal in 2008(Maryland).";
  info[0][j] = "0901xitang";
  info[1][j] = 3;
  info[2][j] = 2;
  info[3][j] = "1/2009 West Pond";
  info[4][j++] = "West Pond in Jiangshan City(Zhejiang, China).";
  info[0][j] = "0901jianglang";
  info[1][j] = 4;
  info[2][j] = 3;
  info[3][j] = "1/2009 Mount Jianglang";
  info[4][j++] = "Mount Jianglang in Jiangshan City(Zhejiang, China).";
  info[0][j] = "0903kaleidoscope";
  info[1][j] = 2;
  info[2][j] = 3;
  info[3][j] = "3/2009 Kaleidoscope";
  info[4][j++] = "An art installation in the Kennedy Center during Arabesque(DC).";
  info[0][j] = "0904yale";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "4/2009 Reunion";
  info[4][j++] = "Reunion of USTC Room 201 classmates in Yale University(Connecticut).";
  info[0][j] = "0904xiaomi";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "4/2009 Xiao Mi";
  info[4][j++] = "Xiaomi at University of Maryland 2009 Maryland Day(Maryland).";
  info[0][j] = "0905bksrace";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "5/2009 Kinetic Sculpture Race";
  info[4][j++] = "Baltimore Kinetic Sculpture Race(Maryland).";
  info[0][j] = "0905dance";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "5/2009 Asian Dance";
  info[4][j++] = "An Evening of Traditional Asian Dance(DC).";
  info[0][j] = "0905airshow";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "5/2009 Air Show";
  info[4][j++] = "2009 Joint Service Open House Air Show in Andrews Air Force Base(Maryland).";
  info[0][j] = "0907fireworks";
  info[1][j] = 3;
  info[2][j] = 2;
  info[3][j] = "7/2009 Fireworks";
  info[4][j++] = "Fourth of July Fireworks in Washington(DC).";
  info[0][j] = "0907butterfly";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "7/2009 Butterfly";
  info[4][j++] = '"Wings of Fancy" Live Butterfly Exhibit in Brookside Garden(Maryland).';
  info[0][j] = "0909dance";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "9/2009 Puerto Rican Dance";
  info[4][j++] = "Performance by Dance Company Gibaro de Puerto Rico(DC).";
  info[0][j] = "0910bodies";
  info[1][j] = 5;
  info[2][j] = 3;
  info[3][j] = "10/2009 Bodies in Urban Spaces";
  info[4][j++] = "Human Sculptures in DC Downtown Streets(DC).";
  info[0][j] = "0910youngsan";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "10/2009 Young San Ceremony";
  info[4][j++] = "Buddhist Ritual Song & Dance from Korea(DC).";
  info[0][j] = "0911hoopdance";
  info[1][j] = 3;
  info[2][j] = 2;
  info[3][j] = "11/2009 Hoop Dance";
  info[4][j++] = "Native Indian Hoop Dance Performed by Kevin Locke(DC).";
  info[0][j] = "0912snow";
  info[1][j] = 2;
  info[2][j] = 2;
  info[3][j] = "12/2009 Snow";
  info[4][j++] = "Record Snowfall in December(Maryland).";
  info[0][j] = "0912amish";
  info[1][j] = 3;
  info[2][j] = 2;
  info[3][j] = "12/2009 Amish Buggy";
  info[4][j++] = "Amish Buggy in Lancaster County(Pennsylvania).";
  info[0][j] = "2009cobirding";
  info[1][j] = 6;
  info[2][j] = 2;
  info[3][j] = "2009 C&O Birds";
  info[4][j++] = "Birding at C&O Canal in 2009(Maryland).";
  info[0][j] = "1001smithsonian";
  info[1][j] = 4;
  info[2][j] = 3;
  info[3][j] = "1/2010 Smithsonian";
  info[4][j++] = "Treasures of the Smithsonian Institute(DC).";
  info[0][j] = "1002snow";
  info[1][j] = 2;
  info[2][j] = 2;
  info[3][j] = "2/2010 Snow";
  info[4][j++] = "Blizzard of 2010(Maryland, DC).";
  info[0][j] = "1002newyork";
  info[1][j] = 3;
  info[2][j] = 3;
  info[3][j] = "2/2010 New York";
  info[4][j++] = "Photos taken at New York city(New York).";
  info[0][j] = "1002newyearparade";
  info[1][j] = 3;
  info[2][j] = 2;
  info[3][j] = "2/2010 New Year Parade";
  info[4][j++] = "2010 Chinatown Spring Festival Parade(DC).";
  info[0][j] = "1002gagaku";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "2/2010 Gagaku";
  info[4][j++] = "Gagaku performance by Sukeyasu Shiba's Reigakusha Ensemble(DC).";
  info[0][j] = "1003portland";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "3/2010 Portland Scenery";
  info[4][j++] = "Natural wonders of Portland(Oregon).";
  info[0][j] = "1004cbf";
  info[1][j] = 3;
  info[2][j] = 2;
  info[3][j] = "4/2010 Cherry Blossom Festival";
  info[4][j++] = "National Cherry Blossom Festival Parade and Fireworks(DC).";
  info[0][j] = "1005commencement";
  info[1][j] = 6;
  info[2][j] = 2;
  info[3][j] = "5/2010 Commencement";
  info[4][j++] = "Yun attending 2010 Univerisity of Maryland Commencement(Maryland).";
  info[0][j] = "1005niagara";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "5/2010 Niagara Falls";
  info[4][j++] = "Niagara Falls(Ontario, Canada).";
  info[0][j] = "1007fireworks";
  info[1][j] = 2;
  info[2][j] = 3;
  info[3][j] = "7/2010 Fireworks";
  info[4][j++] = "Independence Day Fireworks in Washington(DC).";
  info[0][j] = "1008newyork";
  info[1][j] = 3;
  info[2][j] = 3;
  info[3][j] = "8/2010 New York";
  info[4][j++] = "New York Central Park and the Cloisters(New York).";
  info[0][j] = "1008hummingbird";
  info[1][j] = 3;
  info[2][j] = 2;
  info[3][j] = "8/2010 Hummingbird";
  info[4][j++] = "Ruby-throated Hummingbirds in Brookside Garden(Maryland).";
  info[0][j] = "1009outerbanks";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "9/2010 Outer Banks";
  info[4][j++] = "Outer Banks(North Carolina).";
  info[0][j] = "1009benchilibowl";
  info[1][j] = 1;
  info[2][j] = 3;
  info[3][j] = "9/2010 Ben's Chili Bowl";
  info[4][j++] = "Ben's Chili Bowl in U Street(DC).";
  info[0][j] = "1009ichiban";
  info[1][j] = 3;
  info[2][j] = 2;
  info[3][j] = "9/2010 Ichiban";
  info[4][j++] = "Ichiban Restaurant in Gaithersburg(Maryland).";
  info[0][j] = "1010crab";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "10/2010 Maryland Crabs";
  info[4][j++] = "Bo Brooks Restaurant in Baltimore(Maryland).";
  info[0][j] = "1012cruise";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "12/2010 Caribbean Cruise";
  info[4][j++] = "7-day Cruise Vacation in the Caribbean(Cayman Islands, Honduras, Mexico, Bahamas).";
  info[0][j] = "1101polarplunge";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "1/2011 Polar Bear Plunge";
  info[4][j++] = "2011 Maryland Polar Bear Plunge(Maryland).";
  info[0][j] = "1102easternmarket";
  info[1][j] = 4;
  info[2][j] = 3;
  info[3][j] = "2/2011 Eastern Market";
  info[4][j++] = "Eastern Market in Washington(DC).";
  info[0][j] = "1102cupidundierun";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "2/2011 Cupid's Undie Run";
  info[4][j++] = "Cupid's Undie Run Benefiting Children's Tumor Foundation(DC).";
  info[0][j] = "1104cherryblossom";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "4/2011 Cherry Blossom";
  info[4][j++] = "Cherry Blossoms around the Tidal Basin in Washington(DC).";
  info[0][j] = "1104oceanaire";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "4/2011 Oceanaire Seafood Room";
  info[4][j++] = "The Oceanaire Seafood Room in Washington(DC).";
  info[0][j] = "1105bksr";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "5/2011 Kinetic Sculpture Race";
  info[4][j++] = "Baltimore Kinetic Sculpture Race(Maryland).";
  info[0][j] = "1105belloc";
  info[1][j] = 3;
  info[2][j] = 2;
  info[3][j] = "5/2011 Bel-Loc Diner";
  info[4][j++] = "Bel-Loc Diner in Parkville(Maryland).";
  info[0][j] = "1105cafeluna";
  info[1][j] = 2;
  info[2][j] = 2;
  info[3][j] = "5/2011 Cafe Luna";
  info[4][j++] = "Cafe Luna at Dupont Circle in Washington(DC).";
  info[0][j] = "1105ethiopian";
  info[1][j] = 3;
  info[2][j] = 2;
  info[3][j] = "5/2011 Addis Ababa";
  info[4][j++] = "Addis Ababa Ethiopian Restaurant in Silver Spring(Maryland).";
  info[0][j] = "1105airshow";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "5/2011 Air Show";
  info[4][j++] = "2011 Joint Service Open House Air Show in Andrews Air Force Base(Maryland).";
  info[0][j] = "1105congee";
  info[1][j] = 3;
  info[2][j] = 3;
  info[3][j] = "5/2011 Congee House";
  info[4][j++] = "Congee Bowery in New York City(New York).";
  info[0][j] = "1105carlyle";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "5/2011 Carlyle Restaurant";
  info[4][j++] = "Carlyle Restaurant in New York City(New York).";
  info[0][j] = "1105ippudo";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "5/2011 Ippudo";
  info[4][j++] = "Ippudo Ramen Restaurant in New York City(New York).";

  if(window.usechinese){
     j = 0;
     info[3][j]   = "6/2004 ÄówlQíV";
     info[4][j++] = "ĞcæelQíV, ÄówlQíV, T›<›TX(`ÄOTŞ]), ŒT;`ß~4YÏPq\(WS¾ÑyÖNŞ])KNLˆ0";
     info[3][j]   = "8/2004 €4x^q\";
     info[4][j++] = "{v€4x^q\(ô~	T<\šNŞ])0";
     info[3][j]   = "9/2004 ?–aSêšNlQíV";
     info[4][j++] = "?–aSêšNlQíV2—%„(àVŞ])0";
     info[3][j]   = "9/2004 pS,{‰[ºN‚‚";
     info[4][j++] = "NSÛv˜pS,{‰[ºN‚‚ŒTpS,{‰[ºNZSir†™(åT&OÔkšNyr:S)0";
     info[3][j]   = "10/2004 aSÓbKQ­Nq\";
     info[4][j++] = "{vaSÓbKQ­Nq\(lšÌ‘pQŞ])0W„T„v4bô~%„1\(Wq\Ì‘0";
     info[3][j]   = "1/2005 C&OĞ³l";
     info[4][j++] = "C&OĞ³lŒT'Yp^(lšÌ‘pQŞ])0";
     info[3][j]   = "1/2005 ê–of";
     info[4][j++] = "ê–ofÿÍbNSâlYlšT(lšÌ‘pQŞ])0";
     info[3][j]   = "4/2005 1j±‚‚‚";
     info[4][j++] = "NSÛv˜2005t^1j±‚‚‚8nLˆ(åT&OÔkšNyr:S)0";
     info[3][j]   = "4/2005 ¨RiríV";
     info[4][j++] = "NSÛv˜ıV¶[¨RiríV(åT&OÔkšNyr:S)0";
     info[3][j]   = "5/2005 Ş˜Lˆhˆo";
     info[4][j++] = "2005‰[·_œ¯ezz›QúW0WŞ˜Lˆhˆo(lšÌ‘pQŞ])0";
     info[3][j]   = "6/2005 íplt";
     info[4][j++] = "¦~KQ¿Síplt‚‚(¾[YÕl<\šNŞ])0";
     info[3][j]   = "7/2005 0qkp";
     info[4][j++] = "NSÛv˜ìrËzåe0qkpZfO(åT&OÔkšNyr:S)0";
     info[3][j]   = "7/2005 p^";
     info[4][j++] = "Ricketts Glen Ş]ËzlQíVwp^(¾[YÕl<\šNŞ])0";
     info[3][j]   = "9/2005 ³R¨R‚‚8nLˆ";
     info[4][j++] = "Öv_t¯e!X^³R¨R‚‚8nLˆ(lšÌ‘pQŞ])0";
     info[3][j]   = "9/2005 -NËyfg";
     info[4][j++] = "-NËyMRYÍb„vg®N(lšÌ‘pQŞ])0";
     info[3][j]   = "10/2005 -NıV‚‚";
     info[4][j++] = "NSÛv˜¯€<\ê-NÃ_„v-NıV‡eS‚‚(åT&OÔkšNyr:S)0";
     info[3][j]   = "10/2005 Ñ4lp^";
     info[4][j++] = "Ñ4lp^lQíVÂ‰p^ÿO¢~öS(‰ô~	T<\šNŞ])0";
     info[3][j]   = "10/2005 Â‰";
     info[4][j++] = "Ñ4lıV¶[Î‘u¨RirİO¤b:SÂ‰(lšÌ‘pQŞ])0";
     info[3][j]   = "11/2005 OÊƒ";
     info[4][j++] = "ªn¹±‚íVOÊƒ(lšÌ‘pQŞ])0";
     info[3][j]   = "11/2005 ?–(„ÿf<h›\";
     info[4][j++] = "ai`‚‚8n?–(„ÿf<h›\(lšÌ‘pQŞ]ÿô~	T<\šNŞ])0";
     info[3][j]   = "12/2005 ê–of";
     info[4][j++] = "7bYŒT‰[ĞcfW…Qbb:W„vê–of(lšÌ‘pQŞ])0";
     info[3][j]   = "12/2005 ]b^tlQíV";
     info[4][j++] = "]b^tıV¶[lQíV(WSaSWeg£Ş])0";
     info[3][j]   = "12/2005 'Y¼lıl0W";
     info[4][j++] = "'Y¼lıl0WıV¶[lQíV([OWÌ‘¾Ş])0";
     info[3][j]   = "12/2005 ÊsZty›\";
     info[4][j++] = "gWSè„vÊsZty¤›\([OWÌ‘¾Ş])0";
     info[3][j]   = "12/2005 Ôk¯eïQi`";
     info[4][j++] = "Ôk¯eïQi`ıV¶[lQíV([OWÌ‘¾Ş])0";
     info[3][j]   = "12/2005 =Nyr›\";
     info[4][j++] = "=Nyr›\Î‘u¨RirİO¤b:S([OWÌ‘¾Ş])0";
     info[3][j]   = "1/2006 v‡N‡";
     info[4][j++] = "NSÛv˜ıV¶[¨RiríV)n¤[Ì‘wt‡v‡ŒT‡(åT&OÔkšNyr:S)0";
     info[3][j]   = "1/2006 d–YTkp•";
     info[4][j++] = "d–YY(WgËS¶[Tkp•(lšÌ‘pQŞ])0";
     info[3][j]   = "1/2006 %f‚‚hˆo";
     info[4][j++] = "ÖvÎWVn—gFU:WÎ°e%f‡ez‚hˆo(lšÌ‘pQŞ])0";
     info[3][j]   = "2/2006 g
N—g¢h";
     info[4][j++] = "}v)YÍb„vg®N(lšÌ‘pQŞ])0";
     info[3][j]   = "2/2006 wg‚lQ";
     info[4][j++] = "»S\?–èY¶[wg‚lQ(¾[YÕl<\šNŞ])0";
     info[3][j]   = "2/2006 'Yê–";
     info[4][j++] = "CQµ[‚‚N'Yê–(lšÌ‘pQŞ])0";
     info[3][j]   = "2/2006 Î˜Ï%óg";
     info[4][j++] = "NSÛv˜âlYlšT³l¹„vógh(åT&OÔkšNyr:S)0";
     info[3][j]   = "3/2006 pQ±‚U\";
     info[4][j++] = "lšÌ‘pQpQ±‚OSO(W­N_r˜|Ş]Æ–O:W>NR„v2006t^pQ±‚%fU\(lšÌ‘pQŞ])0";
     info[3][j]   = "4/2006 yŠÆYëXG•";
     info[4][j++] = "ñ‚ıV(WSú^Ëz„v,{N*N8lEN–kl0WÿyŠÆYëXG•(ô~	T<\šNŞ])0";
     info[3][j]   = "4/2006 Í‚m";
     info[4][j++] = "NêSÍ‚m„vEe‹N(lšÌ‘pQŞ])0";
     info[3][j]   = "4/2006 ×rU\";
     info[4][j++] = "­N_r˜|Ş]Æ–O:W>NR„v×rU\(lšÌ‘pQŞ])0";
     info[3][j]   = "4/2006 ÁÑ‘™™";
     info[4][j++] = "(Wô]\„vid„vê–(g±‚íVÂ‰OÁÑ‘™™(lšÌ‘pQŞ])0";
     info[3][j]   = "5/2006 Wˆ‚";
     info[4][j++] = "NSÛv˜ıVOq\MR„vWˆ‚(åT&OÔkšNyr:S)0";
     info[3][j]   = "5/2006 NSÛv˜";
     info[4][j++] = "Ù~èYN(WNSÛv˜S_ü[8n(åT&OÔkšNyr:S)0";
     info[3][j]   = "5/2006 ïQ\yrºN‚‚";
     info[4][j++] = ",{NJ\[OÌ‘·_Ì‘KQ^ïQ\yrºN‚‚(lšÌ‘pQŞ])0";
     info[3][j]   = "5/2006 ô]ÎW…Q/n";
     info[4][j++] = "ô]\„vid^…Q/nYof(lšÌ‘pQŞ])0";
     info[3][j]   = "5/2006 Ş˜Lˆhˆo";
     info[4][j++] = "2006‰[·_œ¯ezz›QúW0WŞ˜Lˆhˆo(lšÌ‘pQŞ])0";
     info[3][j]   = "5/2006 9ÎW";
     info[4][j++] = "hT+g»Swg‚lQ‚FZ(¾[YÕl<\šNŞ]ÿ°eıl‰Ş])0";
     info[3][j]   = "6/2006 [f";
     info[4][j++] = "NASCAR NEXTELogû|R„vPocono 500[f(¾[YÕl<\šNŞ])0";
     info[3][j]   = "6/2006 }v«[";
     info[4][j++] = "hT+g}v«[(åT&OÔkšNyr:S)0";
     info[3][j]   = "7/2006 ìrËzåe";
     info[4][j++] = "7g4÷SìrËzåe†^xQ(åT&OÔkšNyr:S)0";
     info[3][j]   = "7/2006 JT+RÎ‘™";
     info[4][j++] = "gËSìNNùftfŒTÜÍsJT+R(lšÌ‘pQŞ])0";
     info[3][j]   = "7/2006 SaSYén";
     info[4][j++] = "hT+g0Rwm¹2—%„(SaSWeg³~Ş])0";
     info[3][j]   = "7/2006 Î˜›RÑS5uÙz";
     info[4][j++] = "q\QgÌ‘„vÎ˜›RÑS5uÙz(¾[YÕl<\šNŞ])0";
     info[3][j]   = "7/2006 Zf™";
     info[4][j++] = "Tatiana„vJT+RZf™(lšÌ‘pQŞ])0";
     info[3][j]   = "8/2006 áœQgrO";
     info[4][j++] = "2006t^¦^—NS·_á„vœQgrÛvO(lšÌ‘pQŞ])0";
     info[3][j]   = "8/2006 ‡ez‚YtQ‚‚";
     info[4][j++] = "2006t^lšÌ‘pQ‡ez‚YtQ‚‚(lšÌ‘pQŞ])0";
     info[3][j]   = "9/2006 2—)Y‚H";
     info[4][j++] = "NSÛv˜¯€<\ê-NÃ_„v2—)Y‚H(åT&OÔkšNyr:S)0";
     info[3][j]   = "9/2006 !nãSäSG•";
     info[4][j++] = "!nãSäSG•Ç‘Î˜(‰ô~	T<\šNŞ])0";
     info[3][j]   = "9/2006 œQ¶[PN";
     info[4][j++] = "œQ:Ww*s[ÑŒTXdWSÜt(ô~	T<\šNŞ])0";
     info[3][j]   = "10/2006 -NËyZfO";
     info[4][j++] = " wm
Nufgÿ)Y¯mqQdköe 9ÎWf[¨OLu2006-NËyT€"kZfO(¾[YÕl<\šNŞ])0";
     info[3][j]   = "10/2006 }vq\O¢~öS";
     info[4][j++] = "}vq\îh—g:SO¢~öS(°eU^ÀN\Ş])0";
     info[3][j]   = "10/2006 äSby_Í‘o";
     info[4][j++] = "142hTt^WSSb‰Nê–~gªnby_Í‘o(ô~	T<\šNŞ])0";
     info[3][j]   = "10/2006 pS¦^‚H";
     info[4][j++] = "Rama Vaidyanathan(WFreerŒTSackler/g†™hˆopS¦^FZWYäSxQ‚(åT&OÔkšNyr:S)0";
     info[3][j]   = "10/2006 N#WKNY";
     info[4][j++] = "2006Öv_t¯e!X^N#W‚‚MRY(lšÌ‘pQŞ])0";
     info[3][j]   = "11/2006 ‰[³~âl)R¯e";
     info[4][j++] = "‰[³~âl)R¯ewÔb³l(lšÌ‘pQŞ])0";
     info[3][j]   = "11/2006 +sU\";
     info[4][j++] = "Öv_t¯e!X™„áœQgrO:Ww+sU\(lšÌ‘pQŞ])0";
     info[3][j]   = "11/2006 R:NºNÍk";
     info[4][j++] = "\õ—ŒTš€Ì‘„v\[[(lšÌ‘pQŞ])0";
     info[3][j]   = "11/2006 ai`‚‚";
     info[4][j++] = "ë_PN„vai`‚‚(lšÌ‘pQŞ])0";
     info[3][j]   = "12/2006 4lÏe†™";
     info[4][j++] = "ô]\„vid^„vıV¶[4lÏe†™(lšÌ‘pQŞ])0";
     info[3][j]   = "12/2006 ‚‚åei_op";
     info[4][j++] = "‚‚åei_op(ô~	T<\šNŞ]ÿåT&OÔkšNyr:SÿlšÌ‘pQŞ])0";
     info[3][j]   = "12/2006 \s|";
     info[4][j++] = "$NhT'Y„v\s|(lšÌ‘pQŞ])0";
     info[3][j]   = "12/2006 ÕkNxQ<y";
     info[4][j++] = "Gl¢”ÂS RlšÌ‘pQ'Yf[„v2006t^ÕkNxQ<y(lšÌ‘pQŞ])0";
     info[3][j]   = "2006 ³l¹w";
     info[4][j++] = "2006t^(WC&OĞ³lıV¶[lQíVw(lšÌ‘pQŞ])0";
     info[3][j]   = "2006 YeX";
     info[4][j++] = "2006t^Íb„v—[Yeú^Q{(åT&OÔkšNyr:SÿlšÌ‘pQŞ]ÿ¾[YÕl<\šNŞ]ÿô~	T<\šNŞ]ÿ‰ô~	T<\šNŞ])0";
     info[3][j]   = "1/2007 idXbfU\";
     info[4][j++] = "NSÛv˜2007ıVE–idXbfU\(åT&OÔkšNyr:S)0";
     info[3][j]   = "1/2007 Ñnê–";
     info[4][j++] = "ñmªnVnÑnê–:WwÑnê–(lšÌ‘pQŞ])0";
     info[3][j]   = "1/2007 fU\sY";
     info[4][j++] = "2007NSÛv˜fU\
N„vsY(åT&OÔkšNyr:S)0";
     info[3][j]   = "1/2007 fU\";
     info[4][j++] = "2007NSÛv˜fU\(åT&OÔkšNyr:S)0";
     info[3][j]   = "1/2007 ÍSb:yZ8nLˆ";
     info[4][j++] = "NSÛv˜ÍSb:yZ8nLˆ(åT&OÔkšNyr:S)0";
     info[3][j]   = "1/2007 ZZU\";
     info[4][j++] = "2007t^NSÛv˜ZZU\
N„vZZ†^gÅˆhˆo(ô~	T<\šNŞ])0";
     info[3][j]   = "2/2007 \s|Çt^";
     info[4][j++] = "$N*NJSg'Y„v\s|Çd–Y(lšÌ‘pQŞ])0";
     info[3][j]   = "2/2007 %f‚‚8nLˆ";
     info[4][j++] = "NSÛv˜UºNWˆ2007t^%f‚‚8nLˆ(åT&OÔkšNyr:S)0";
     info[3][j]   = "3/2007 #W^yrÌ‘KQ‚‚";
     info[4][j++] = "2007t^šN†Sq\'Y^#W^yrÌ‘KQ‚‚8nLˆ(ô~	T<\šNŞ])0";
     info[3][j]   = "3/2007 \s|~våe";
     info[4][j++] = "N~v)Y'Y„v\s|(lšÌ‘pQŞ])0";
     info[3][j]   = "3/2007 Bhangra‚";
     info[4][j++] = "(WNSÛv˜ª[Õl'Y…S>NR„v,{14J\Bhangra‚'Y[(åT&OÔkšNyr:S)0";
     info[3][j]   = "4/2007 1j±‚‚‚8nLˆ";
     info[4][j++] = "NSÛv˜2007t^1j±‚‚‚8nLˆ(åT&OÔkšNyr:S)0";
     info[3][j]   = "4/2007 ZZ<y";
     info[4][j++] = "kSNŒTSfNS„vZZ<y(lšÌ‘pQŞ])0";
     info[3][j]   = "4/2007 ê–(g±‚íV";
     info[4][j++] = "\s|N¶[(Wô]\„vid8nê–(g±‚íV(lšÌ‘pQŞ])0";
     info[3][j]   = "5/2007 ”Ng”N‚‚";
     info[4][j++] = "(WNSÛv˜w2007t^¨X‰åT”Ng”N‚‚†^]y;m¨R(åT&OÔkšNyr:S)0";
     info[3][j]   = "5/2007 lš/g-NÃ_";
     info[4][j++] = "âlYlšTlš/g-NÃ_%fc[ù[Y_>eåe(lšÌ‘pQŞ])0";
     info[3][j]   = "5/2007 YZ7Y‚";
     info[4][j++] = "(WpS,{‰[ºNZSir†™w2007YZ7Y‚‚
N„v‚Hhˆo(åT&OÔkšNyr:S)0";
     info[3][j]   = "5/2007 Ş˜Lˆhˆo";
     info[4][j++] = "2007‰[·_œ¯ezz›QúW0WŞ˜Lˆhˆo(lšÌ‘pQŞ])0";
     info[3][j]   = "5/2007 lšbâV";
     info[4][j++] = "Ñy\DQ_lšbâV(WÖv_t¯e!XoúQ(lšÌ‘pQŞ])0";
     info[3][j]   = "5/2007 Ún÷–idXbÆ–O";
     info[4][j++] = "NSÛv˜,{20J\Ún÷–idXbfÆ–O(åT&OÔkšNyr:S)0";
     info[3][j]   = "6/2007 lx¸~g9‚Ôk[";
     info[4][j++] = "(W?–KQ­NVn>NR„vlx¸~g9‚Ôk[(ô~	T<\šNŞ])0";
     info[3][j]   = "6/2007 T'`K`8nLˆ";
     info[4][j++] = "2007NSÛv˜T'`K`'Y8nLˆ(åT&OÔkšNyr:S)0";
     info[3][j]   = "6/2007 YZ7Y‚";
     info[4][j++] = "Halau O`AulaniYZ7Y‚Hf[!h(WRosslyn Spectrum„voúQ(ô~	T<\šNŞ])0";
     info[3][j]   = "6/2007 BMD";
     info[4][j++] = "Bowen McCauley Dance‚HâV(WLubber Run2—)YgR:W„voúQ(ô~	T<\šNŞ])0";
     info[3][j]   = "6/2007 Âr"k‚‚8nLˆ";
     info[4][j++] = "2007NSÛv˜ RÒRÔkÂr"k‚‚8nLˆ(åT&OÔkšNyr:S)0";
     info[3][j]   = "6/2007 l×O‚‚";
     info[4][j++] = "2007òSÆ[îh³~ZSirxvzb–DnlQ³lAmßWl×O‡eS‚‚(åT&OÔkšNyr:S)0";
     info[3][j]   = "7/2007 ìrËzåe0qkp";
     info[4][j++] = "âlYlšT³l¹wìrËzåe0qkp(åT&OÔkšNyr:S)0";
     info[3][j]   = "7/2007 lš/gŞz[O";
     info[4][j++] = "[rG•lš/gŞz[O(°eıl‰Ş])0";
     info[3][j]   = "7/2007 šN2m‚‚";
     info[4][j++] = "(W÷–¯e˜>NR„v,{ÛVJ\šN2m‚‚(ô~	T<\šNŞ])0";
     info[3][j]   = "8/2007 1r\pQ‚‚";
     info[4][j++] = "šN†Sq\'Y^1r\pQ‚‚(ô~	T<\šNŞ])0";
     info[3][j]   = "8/2007 ™„áœQN'YO";
     info[4][j++] = "™„Øšlš)RáœQN'YO
Nw\*s[ÑŒT'Y*`}Qf(lšÌ‘pQŞ])0";
     info[3][j]   = "8/2007 ‡ez‚YtQ‚‚";
     info[4][j++] = "2007t^lšÌ‘pQ‡ez‚YtQ‚‚(lšÌ‘pQŞ])0";
     info[3][j]   = "9/2007 ³R¨R‚‚8nLˆ";
     info[4][j++] = "Öv_t¯e!X^³R¨R‚‚8nLˆ(lšÌ‘pQŞ])0";
     info[3][j]   = "9/2007 wm
Nw¸œ|œ";
     info[4][j++] = "(WCape Cod„vProvincetownXN9‚0RStellwagen BankwmmİO¤b:Sw¸œ|œ(lš^Xø‹^XŞ])0";
     info[3][j]   = "9/2007 ZZ<y";
     info[4][j++] = "]i`ŒTP[V—(WlšÌ‘pQ'Yf[ª~õ_YeX„vZZ<y(lšÌ‘pQŞ])0";
     info[3][j]   = "9/2007 WSÜt‚‚";
     info[4][j++] = "(WCooperstownWSÜt‚‚
Nw'YWSÜtŒTWSÜt9‚Ôk[(½~¦~Ş])0";
     info[3][j]   = "10/2007 ı¦hºNidXbÆ–O";
     info[4][j++] = "(W?–ô]NRipkenÒht:W>NR„vı¦hºNidXbÆ–O(lšÌ‘pQŞ])0";
     info[3][j]   = "10/2007 idXbŠÎ‘[";
     info[4][j++] = "(WBudds Creek>NR„vlšÌ‘pQŞ]idXbŠÎ‘&•h[(lšÌ‘pQŞ])0";
     info[3][j]   = "10/2007 íplt‚‚";
     info[4][j++] = "ÙNWS\Qq\7Œíplt‚‚(ô~	T<\šNŞ])0";
     info[3][j]   = "10/2007 ¨X‰åT‚";
     info[4][j++] = "Los Quetzales¨X‰åT‚(åT&OÔkšNyr:S)0";
     info[3][j]   = "10/2007 õP8\";
     info[4][j++] = "õP8\Æ–Oó‚8nWˆ(åT&OÔkšNyr:S)0";
     info[3][j]   = "11/2007 Â‰";
     info[4][j++] = "Ñ4lıV¶[Î‘u¨RirİO¤b:SÂ‰(lšÌ‘pQŞ])0";
     info[3][j]   = "12/2007 *‚Íb";
     info[4][j++] = "Ş˜:g*‚Íb0";
     info[3][j]   = "12/2007 \s|";
     info[4][j++] = "\s|(W¦Sè•(-NıVyú^)0";
     info[3][j]   = "12/2007 Øš-NTf[Z€O";
     info[4][j++] = "ŒTØš-NTf[ë_PNøvZ€(-NıVyú^)0";
     info[3][j]   = "12/2007 R-NTf[Z€O";
     info[4][j++] = "ŒTR-NTf[ë_PNøvZ€(-NıVyú^)0";
     info[3][j]   = "12/2007 *‚ck";
     info[4][j++] = "?–Ÿ”j€fïS1r„v?QP[*‚ck(-NıVyú^)0";
     info[3][j]   = "12/2007 b„v¶[ºN";
     info[4][j++] = "(W™Ÿ©\ŒT¶[ºNâVZ€(-NıVyú^)0";
     info[3][j]   = "12/2007-2/2008 S¬N";
     info[4][j++] = "á€TŒTvQƒ[ofir(-NıVS¬N)0";
     info[3][j]   = "2007 ³l¹w";
     info[4][j++] = "2007t^(WC&OĞ³lıV¶[lQíVw(lšÌ‘pQŞ])0";
     info[3][j]   = "2/2008 ŸS¿[KNY";
     info[4][j++] = "¯€<\ê-NÃ_ŸS¿[KNY(åT&OÔkšNyr:S)0";
     info[3][j]   = "2/2008 ÉbN2m‚H";
     info[4][j++] = "(WJosephine Butler CenterwÉbN2m‚H(åT&OÔkšNyr:S)0";
     info[3][j]   = "3/2008 #W^yrÌ‘KQ‚‚";
     info[4][j++] = "2008t^šN†Sq\'Y^#W^yrÌ‘KQ‚‚8nLˆ(ô~	T<\šNŞ])0";
     info[3][j]   = "3/2008 fUfU–Ôk[";
     info[4][j++] = "wfUfU–Ôk[(lšÌ‘pQŞ])0";
     info[3][j]   = "3/2008 NLu‚HGlo";
     info[4][j++] = "wNLu‚HGlo(lšÌ‘pQŞ])0";
     info[3][j]   = "4/2008 \s|w1j±‚";
     info[4][j++] = "\s|ŒT8rˆY%f8nO1j±‚(lšÌ‘pQŞ])0";
     info[3][j]   = "4/2008 1j±‚‚‚";
     info[4][j++] = "1j±‚‚‚whˆo(åT&OÔkšNyr:S)0";
     info[3][j]   = "4/2008 kp‚";
     info[4][j++] = "”N±‚üb^«ˆ%‰ó—PN‚‚
N„vkp‚hˆo(lšÌ‘pQŞ])0";
     info[3][j]   = "5/2008 ıV¶['YYeX";
     info[4][j++] = "ıV¶['YYeXN~vhTt^†^yr+Rgqfhˆo(åT&OÔkšNyr:S)0";
     info[3][j]   = "5/2008 Ş˜Lˆhˆo";
     info[4][j++] = "2008‰[·_œ¯ezz›QúW0WŞ˜Lˆhˆo(lšÌ‘pQŞ])0";
     info[3][j]   = "5/2008 YZ7Y‚";
     info[4][j++] = "Halau O`AulaniYZ7Y‚Hf[!h(WpS,{‰[ºNZSir†™„voúQ(åT&OÔkšNyr:S)0";
     info[3][j]   = "7/2008 N9N‚H";
     info[4][j++] = "2008òSÆ[îh³~ZSirxvzb–l×O‡eS‚‚
NwN9N‚H(åT&OÔkšNyr:S)0";
     info[3][j]   = "7/2008 0qkp";
     info[4][j++] = "2008t^šN†Sq\'Y^0qkp(ô~	T<\šNŞ])0";
     info[3][j]   = "7/2008 š€®v‚";
     info[4][j++] = "Saffron Dance‚HâV(WLubber Run2—)YgR:W„voúQ(ô~	T<\šNŞ])0";
     info[3][j]   = "8/2008 ğlıV‚‚";
     info[4][j++] = "2008ğlıV‚‚(åT&OÔkšNyr:S)0";
     info[3][j]   = "9/2008 ³R¨R‚‚8nLˆ";
     info[4][j++] = "Öv_t¯e!X^³R¨R‚‚8nLˆ(lšÌ‘pQŞ])0";
     info[3][j]   = "9/2008 Î°eZfO";
     info[4][j++] = "lšÌ‘pQågÏ~ís2008Î°eZfO(lšÌ‘pQŞ])0";
     info[3][j]   = "9/2008 \s|";
     info[4][j++] = "2008Î°eZfO
N„v\s|(lšÌ‘pQŞ])0";
     info[3][j]   = "9/2008 aSâl6€Éb";
     info[4][j++] = "ô]‰'YO†™(WNSÛv˜>NRaSâl6€Éb‚‚(åT&OÔkšNyr:S)0";
     info[3][j]   = "9/2008 šNS_¯eid9hWˆ:Såe";
     info[4][j++] = ",{30J\šNS_¯eid9hWˆ:Såe(åT&OÔkšNyr:S)0";
     info[3][j]   = "9/2008 Øš-NDj„it[";
     info[4][j++] = "QuinceœgíVØš-N2mîr–ù['YlšëXi—Øš-NÄ‡–„vDj„it[(lšÌ‘pQŞ])0";
     info[3][j]   = "9/2008 a„„R‘‚‚";
     info[4][j++] = "Tararaa„„R‘‚‚
NÁTa„„R‘ŒT)a„„(ô~	T<\šNŞ])0";
     info[3][j]   = "9/2008 ‚H";
     info[4][j++] = "pS,{‰[ºNZSir†™Ì‘„vpS,{‰[ºN‚HŒT»s)Rô~šN‚H(åT&OÔkšNyr:S)0";
     info[3][j]   = "10/2008 ASg‚‚";
     info[4][j++] = ",{26J\·_ıVG•ASg‚‚(lšÌ‘pQŞ])0";
     info[3][j]   = "10/2008 W3€vQ‚‚";
     info[4][j++] = "2008W3€vQ‚‚(åT&OÔkšNyr:S)0";
     info[3][j]   = "10/2008 ASg‚‚";
     info[4][j++] = "lšÌ‘pQdUR‘6R €(WĞc_r˜|Ş]Æ–O:W>NR„vASg‚‚(lšÌ‘pQŞ])0";
     info[3][j]   = "10/2008 ípltŒTO(gå]‚‚";
     info[4][j++] = "(WShawneeq\:SÑnê–:WwípltŒTO(gå]Şz€b[(¾[YÕl<\šNŞ])0";
     info[3][j]   = "10/2008 7unbsYÅˆ[Ñ";
     info[4][j++] = "2008\g¦Wˆ:S7unbsYÅˆzØšß‹—[Ñ(åT&OÔkšNyr:S)0";
     info[3][j]   = "11/2008 ZZ<y";
     info[4][j++] = "JingŒTBrandon(WTurf Valley Resort>NLˆ„vZZ<y(lšÌ‘pQŞ])0";
     info[3][j]   = "11/2008 ai`‚‚";
     info[4][j++] = "(W¾[Ş]ŒT‚lQ‚FZNwÇai`‚‚(¾[YÕl<\šNŞ]ÿ½~¦~Ş])0";
     info[3][j]   = "12/2008 \s|";
     info[4][j++] = "$N\„v\s|(lšÌ‘pQŞ])0";
     info[3][j]   = "2008 ³l¹w";
     info[4][j++] = "2008t^(WC&OĞ³lıV¶[lQíVw(lšÌ‘pQŞ])0";
     info[3][j]   = "1/2009 _lq\‰XX";
     info[4][j++] = "_lq\^‰XX„väSTE\ŒT\÷](-NıVYm_l)0";
     info[3][j]   = "1/2009 _lÎq\";
     info[4][j++] = "_lq\^_lÎq\(-NıVYm_l)0";
     info[3][j]   = "3/2009 N±‚R{";
     info[4][j++] = "¯€<\ê-NÃ_?–Éb/Oz‚/g‚‚
N„vN±‚R{U\ÁT(åT&OÔkšNyr:S)0";
     info[3][j]   = "4/2009 Tf[Z€O";
     info[4][j++] = "Ñy'Y118|i201¤[(W6€œ'Yf[Z€O(·^…mÄr<hŞ])0";
     info[3][j]   = "4/2009 \s|ÇlšÌ‘pQåe";
     info[4][j++] = "\s|ŒT8rˆYvYvY(WlšÌ‘pQ'Yf[ÇlšÌ‘pQåe(lšÌ‘pQŞ])0";
     info[3][j]   = "5/2009 ºN›RÕ–QX[f";
     info[4][j++] = "ô]\„vidºN›RÕ–QX[f(lšÌ‘pQŞ])0";
     info[3][j]   = "5/2009 šN2m‚H";
     info[4][j++] = "pS¦^‚ŒT™„äS‚(åT&OÔkšNyr:S)0";
     info[3][j]   = "5/2009 Ş˜Lˆhˆo";
     info[4][j++] = "2009‰[·_œ¯ezz›QúW0WŞ˜Lˆhˆo(lšÌ‘pQŞ])0";
     info[3][j]   = "7/2009 ìrËzåe0qkp";
     info[4][j++] = "âlYlšT³l¹wìrËzåe0qkp(åT&OÔkšNyr:S)0";
     info[3][j]   = "7/2009 i_v‡";
     info[4][j++] = "Brookside±‚íVwt‡v‡U\(lšÌ‘pQŞ])0";
     info[3][j]   = "9/2009 âlYÎT‚H";
     info[4][j++] = "Gibaro de Puerto Rico‚HâVhˆo„v‚H(åT&OÔkšNyr:S)0";
     info[3][j]   = "10/2009 Wˆ4YºNSOÕ–QX";
     info[4][j++] = "NSÛv˜Wˆ4Y„vºNSOÕ–QX(åT&OÔkšNyr:S)0";
     info[3][j]   = "10/2009 upq\‹e";
     info[4][j++] = "é—ıV[OYeêN_(åT&OÔkšNyr:S)0";
     info[3][j]   = "11/2009 pS,{‰[W¯s‚";
     info[4][j++] = "Kevin Lockehˆo„vpS,{‰[W¯s‚(åT&OÔkšNyr:S)0";
     info[3][j]   = "12/2009 'Yê–";
     info[4][j++] = "12g4x°‹U_„v'Yê–(lšÌ‘pQŞ])0";
     info[3][j]   = "12/2009 Amishlšf";
     info[4][j++] = "pQaS¯eyrá„vAmishlšf(¾[YÕl<\šNŞ])0";
     info[3][j]   = "2009 ³l¹w";
     info[4][j++] = "2009t^(WC&OĞ³lıV¶[lQíVw(lšÌ‘pQŞ])0";
     info[3][j]   = "1/2010 òSÆ[îh<\ZSirb–";
     info[4][j++] = "òSÆ[îh<\ZSirb–„v†™Ï…(åT&OÔkšNyr:S)0";
     info[3][j]   = "2/2010 ´fÎ˜ê–";
     info[4][j++] = "2010t^2g„v´fÎ˜ê–(lšÌ‘pQŞ]ÿåT&OÔkšNyr:S)0";
     info[3][j]   = "2/2010 ½~¦~";
     info[4][j++] = "½~¦~^Íb„vgqGr(½~¦~Ş])0";
     info[3][j]   = "2/2010 %f‚‚8nLˆ";
     info[4][j++] = "NSÛv˜UºNWˆ2010t^%f‚‚8nLˆ(åT&OÔkšNyr:S)0";
     info[3][j]   = "2/2010 Å–PN";
     info[4][j++] = "åe,g6OPN‚hˆo„vÅ–PN(åT&OÔkšNyr:S)0";
     info[3][j]   = "3/2010 âlyrpQÎ˜IQ";
     info[4][j++] = "âlyrpQD–Ñ„vÎ˜IQ(ÄOÒRˆQŞ])0";
     info[3][j]   = "4/2010 1j±‚‚‚";
     info[4][j++] = "1j±‚‚‚8nLˆŒT0qkp(åT&OÔkšNyr:S)0";
     info[3][j]   = "5/2010 ÕkNxQ<y";
     info[4][j++] = "\õ—(WlšÌ‘pQ'Yf[„vZSëXÕkNxQ<y(lšÌ‘pQŞ])0";
     info[3][j]   = "5/2010 <\šN RÉb'Yp^";
     info[4][j++] = "<\šN RÉb'Yp^( Rÿb'Y‰['Yeuw)0";
     info[3][j]   = "7/2010 ìrËzåe0qkp";
     info[4][j++] = "âlYlšT³l¹wìrËzåe0qkp(åT&OÔkšNyr:S)0";
     info[3][j]   = "8/2010 ½~¦~";
     info[4][j++] = "-N.YlQíVŒTîOSb–ZSir†™(½~¦~Ş])0";
     info[3][j]   = "8/2010 ‡";
     info[4][j++] = "(Wªn¹±‚íVÍb¢~‰U‡(lšÌ‘pQŞ])0";
     info[3][j]   = "9/2010 SaSYén";
     info[4][j++] = "Yén(SaSWeg³~Ş])0";
     info[3][j]   = "9/2010 ,g„v¢~£i—x";
     info[4][j++] = "(W,g„v¢~£i—xT¢~£iq‘ŒTíp×r(åT&OÔkšNyr:S)0";
     info[3][j]   = "9/2010 Njuçpäp";
     info[4][j++] = "(WNju™†™Té—ıVwmœœçpäp(lšÌ‘pQŞ])0";
     info[3][j]   = "10/2010 lšÌ‘pQƒ‡ù‡";
     info[4][j++] = "(Wô]\„vidBo Brooksm™—^Tƒ‡ù‡(lšÌ‘pQŞ])0";
     info[3][j]   = "12/2010 8n RÒRÔk";
     info[4][j++] = "XNlQ;N÷S¹ln8n RÒRÔk(_üf¤›\ÿ*mıÉb¯eÿ¨X‰åTÿô]ÈTlš¯e)0";
     info[3][j]   = "1/2011 ¬Qól";
     info[4][j++] = ":NyreYOy{>k„v¬Qól;m¨R(lšÌ‘pQŞ])0";
     info[3][j]   = "2/2011 N^:W";
     info[4][j++] = "NSÛv˜„vN^:W(åT&OÔkšNyr:S)0";
     info[3][j]   = "2/2011 z…QäˆÑek";
     info[4][j++] = "z@w…QäˆÑ'YWˆ(åT&OÔkšNyr:S)0";
     info[3][j]   = "4/2011 1j±‚";
     info[4][j++] = "(WNSÛv˜w1j±‚(åT&OÔkšNyr:S)0";
     info[3][j]   = "4/2011 Oceanairewmœœ™†™";
     info[4][j++] = "(WNSÛv˜OceanaireTwmœœ(åT&OÔkšNyr:S)0";
     info[3][j]   = "5/2011 ºN›RÕ–QX[f";
     info[4][j++] = "ô]\„vidºN›RÕ–QX[f(lšÌ‘pQŞ])0";
     info[3][j]   = "5/2011 Bel-Loc™†™";
     info[4][j++] = "ô]\„vidÎWY„vBel-Loc™†™(lšÌ‘pQŞ])0";
     info[3][j]   = "5/2011 Cafe Luna™†™";
     info[4][j++] = "NSÛv˜\g¦WˆÃ_D–Ñ„vCafe Luna™†™(åT&OÔkšNyr:S)0";
     info[3][j]   = "5/2011 šN„v¯ešN™†™";
     info[4][j++] = "ö”ÉlG•„všN„v¯ešNô]ÃW^XÄOÔkšN™†™(lšÌ‘pQŞ])0";
     info[3][j]   = "5/2011 Ş˜Lˆhˆo";
     info[4][j++] = "2011‰[·_œ¯ezz›QúW0WŞ˜Lˆhˆo(lšÌ‘pQŞ])0";
     info[3][j]   = "5/2011 ¥|KN¶[";
     info[4][j++] = "½~¦~¥|KN¶[(½~¦~Ş])0";
     info[3][j]   = "5/2011 aS±ƒ\m™—^";
     info[4][j++] = "½~¦~aS±ƒ\ÕlıV™†™(½~¦~Ş])0";
     info[3][j]   = "5/2011 NÎ˜Xb—†™";
     info[4][j++] = "½~¦~NÎ˜Xåe_b—†™(½~¦~Ş])0";
  } 

  //special touch
  info[4][28] = info[4][28]+'<br><center><img src="'+info[5]+'newyear.gif" style="border:0px"></img></center>';
  info[4][83] = info[4][83]+'<br><center><img src="'+info[5]+'heart.gif" style="border:0px"></img></center>';
  info[4][105] = info[4][105]+'<br><center><img src="'+info[5]+'weddingcouple.gif" style="border:0px"></img></center>';
  info[4][149] = info[4][149]+'<br><center><img src="'+info[5]+'rose1.gif" style="border:0px"></img></center>';
  //show password protection status
  for(var tmp=0;tmp<info[0].length;tmp++) info[7][tmp] = false;
  //info[7][0] = true;

  //web counter
  var sc_project   = 592204;
  var sc_partition = 4;
  var sc_security  = "b5d0bd3f";
//-->
